import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiInfo, FiTrash2 } from "react-icons/fi";

import api from "../../../services/api";
import currency from "../../../utils/currency";

import Table from "../../base/Table";
import TitleTable from "../../base/TitleTable";

function FolhaTable() {
  const [folhasPagamento, setFolhasPagamentos] = useState(() => {
    const storageFolhas = localStorage.getItem("@Eniatus:folhasPagamento");

    if (storageFolhas) {
      return JSON.parse(storageFolhas);
    }

    return [];
  });

  useEffect(() => {
    api
      .get("/folha-de-pagamento")
      .then((response) => {
        console.log(response.data);
        setFolhasPagamentos(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@Eniatus:folhasPagamento",
      JSON.stringify(folhasPagamento)
    );
  }, [folhasPagamento]);

  return folhasPagamento.length !== 0 ? (
    <>
      <TitleTable>
        Folha de Pagamento
      </TitleTable>
      <Table>
        <thead>
          <tr>
            <td>Funcionario</td>
            <td>CPF</td>
            <td>Salario</td>
            <td>Periodo</td>
            <td>Inss</td>
            <td>Irrf</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {folhasPagamento.map((folha) => {
            return (
              <tr key={folha.id}>
                <td>{folha.funcionario[0].pessoa.nome}</td>
                <td>{folha.funcionario[0].pessoa.cpf}</td>
                <td>
                  {currency(
                    folha.funcionario[0].salario.valorDaHora *
                    folha.funcionario[0].salario.horasContratadas *
                    folha.funcionario[0].salario.quantSemanas
                  )}
                </td>
                <td>
                  {folha.mes}/{folha.ano}
                </td>
                <td>
                  {currency(
                    (folha.funcionario[0].salario.valorDaHora *
                      folha.funcionario[0].salario.horasContratadas *
                      folha.funcionario[0].salario.quantSemanas *
                      folha.inss.aliquota) /
                    100
                  )}
                </td>
                <td>{currency(folha.irrf.valorDeduzir)}</td>
                <td>
                  <Link to="/admin/minimo">
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
  ) : (
    <>
      <h3>Folhas de Pagameento</h3>
      <h2>Nenhuma folha de pagamento encontrada</h2>
    </>
  );
}

export default FolhaTable;
