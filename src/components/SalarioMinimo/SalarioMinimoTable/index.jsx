import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiInfo, FiTrash2 } from "react-icons/fi";

import api from "../../../services/api";

import Table from "../../base/Table";
import TitleTable from "../../base/TitleTable";

function SalarioMinimoTable() {
  const [salariosMinimo, setSalariosMinimo] = useState(() => {
    const storageSalariosMinimo = localStorage.getItem(
      "@Eniatus:salariosMinimo"
    );
    if (storageSalariosMinimo) {
      return JSON.parse(storageSalariosMinimo);
    }
    return []
  });

  useEffect(() => {
    api
      .get("/salario-minimo")
      .then((response) => {
        // const irrfAtivos = response.data.filter((irrf) => {
        //   return irrf.ativo === true;
        // });
        setSalariosMinimo(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("@Eniatus:salariosMinimo", JSON.stringify(salariosMinimo));
  }, [salariosMinimo]);
  
  return (
    <>
      <TitleTable>
        <h3>Salarios minimos</h3>
      </TitleTable>
      <Table>
        <thead>
          <tr>
            <td>Vigêcia</td>
            <td>Valor</td>
            <td>Ativo</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {salariosMinimo
            .map((salario) => {
              return (
                <tr key={salario.id}>
                  <td>{String(salario.mes).length === 1 ? `0${salario.mes}` : salario.mes}/{salario.vigencia}</td>
                  <td>{salario.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td>
                    {salario.ativo ? "Sim" : "Não"}
                  </td>
                  <td>
                    <Link to="/admin/minimo">
                      <FiInfo size={25} color="#55efc4" />
                    </Link>

                    <button>
                      <FiEdit size={25} color="#fdcb6e" />
                    </button>

                    <button>
                      <FiTrash2 size={25} color="#d63031" />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default SalarioMinimoTable;
