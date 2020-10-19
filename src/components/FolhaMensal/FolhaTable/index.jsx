import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit, FiInfo, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../../services/api";
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
        console.log(response.data)
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
        <h3>Salarios minimos</h3>
      </TitleTable>{" "}
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
                  {(
                    folha.funcionario[0].salario.valorDaHora *
                    folha.funcionario[0].salario.horasContratadas *
                    folha.funcionario[0].salario.quantSemanas
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>
                  {folha.mes}/{folha.ano}
                </td>
                <td>
                  {(
                    (folha.funcionario[0].salario.valorDaHora *
                      folha.funcionario[0].salario.horasContratadas *
                      folha.funcionario[0].salario.quantSemanas *
                      folha.inss.aliquota) /
                    100
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>{folha.irrf.valorDeduzir.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}</td>
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
  ) : (
    <>
      <h3>Folhas de Pagameento</h3>
      <p>Nenhuma folha de pagamento encontrada</p>
    </>
  );
}

export default FolhaTable;
