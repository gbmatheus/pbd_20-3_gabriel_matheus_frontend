import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiInfo, FiTrash2 } from "react-icons/fi";

import api from "../../../services/api";

import Table from "../../base/Table";
import TitleTable from "../../base/TitleTable";
import currency from "../../../utils/currency";

function SalarioFamiliaTable() {
  const [salariosFamilia, setSalariosFamilia] = useState(() => {
    const storageSalariosFamilia = localStorage.getItem(
      "@Eniatus:salariosFamilia"
    );
    if (storageSalariosFamilia) {
      return JSON.parse(storageSalariosFamilia);
    }
    return [];
  });

  useEffect(() => {
    api
      .get("/salario-familia")
      .then((response) => {
        setSalariosFamilia(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@Eniatus:salariosFamilia",
      JSON.stringify(salariosFamilia)
    );
  }, [salariosFamilia]);

  return (
    <>
      <TitleTable>
        <h3>Salarios Familias</h3>
      </TitleTable>
      <Table>
        <thead>
          <tr>
            <td>Vigêcia</td>
            <td>Remuneração</td>
            <td>Valor</td>
            <td>Ativo</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {salariosFamilia.map((salario) => {
            return (
              <tr key={salario.id}>
                <td>
                  {String(salario.mes).length === 1
                    ? `0${salario.mes}`
                    : salario.mes}
                  /{salario.vigencia}
                </td>
                <td>
                  {currency(salario.remuneração)}
                </td>
                <td>
                  {currency(salario.valor_unitario)}
                </td>
                <td>{salario.ativo ? "Sim" : "Não"}</td>
                <td>
                  <Link to="/admin/Familia">
                    <FiInfo size={25} color="#55efc4" />
                  </Link>
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

export default SalarioFamiliaTable;
