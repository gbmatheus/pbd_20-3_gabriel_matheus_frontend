import React, {useState,useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiPlusSquare, FiInfo } from "react-icons/fi";

import api from "../../../services/api";

import Table from "../../base/Table";
import TitleTable from "../../base/TitleTable";

function FuncionarioTable() {
  const [funcionarios, setFuncionarios] = useState(() => {
    const storageFuncionarios = localStorage.getItem("@Eniatus:funcionarios");

    if (storageFuncionarios) {
      return JSON.parse(storageFuncionarios);
    }

    return [];
  });

  let {url} =  useRouteMatch();

  useEffect(() => {
    api
      .get("/funcionarios")
      .then((response) => {
        response.data.map((funcionario) => {
          const nascimento = new Date(funcionario.pessoa.dt_nascimento);
          const admissao = new Date(funcionario.dt_admissao);

          funcionario.pessoa.nascimento = `${nascimento.getDay()}/${
            nascimento.getMonth() + 1
          }/${nascimento.getFullYear()}`;
          funcionario.admissao = `${admissao.getDay()}/${
            admissao.getMonth() + 1
          }/${admissao.getFullYear()}`;

          return funcionarios;
        });
        setFuncionarios(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
      // eslint-disable-next-line
  }, []);

  // Atualizar dados do local storage
  useEffect(() => {
    localStorage.setItem("@Eniatus:funcionarios", JSON.stringify(funcionarios));
  }, [funcionarios]);

  return funcionarios.length !== 0 ? (
    <>
      <TitleTable>
        <h3>Lista funcionarios</h3>
        <Link to={`${url}/adicionar`}>
          <FiPlusSquare size={25} color="#0984e3" />
        </Link>
      </TitleTable>
      <Table>
        <thead>
          <tr>
            <td>Nome do Funcionario</td>
            <td>CPF</td>
            <td>Nascimento</td>
            <td>Tipo</td>
            <td>Salário</td>
            <td>Admissão</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => {
            return (
              <tr key={funcionario.pessoa.cpf}>
                <td>{funcionario.pessoa.nome}|{funcionario.id}</td>
                <td>{funcionario.pessoa.cpf}</td>
                <td>{funcionario.pessoa.nascimento}</td>
                <td>{funcionario.tipo === "MES" ? "Mensalista" : "Horista"}</td>
                <td>
                  R${funcionario.salario.valorDaHora *
                    funcionario.salario.horasContratadas *
                    funcionario.salario.quantSemanas}
                </td>
                <td>{funcionario.admissao}</td>
                <td>
                  <Link to={`${url}/${funcionario.id}`}>
                    <FiInfo size={25} color={"var(--color-button)"} />
                  </Link>
                  {/* <button>Info</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  ) : (
    <>
      <TitleTable>
        <h3>Lista funcionarios</h3>
        <Link to="/contador/funcionarios/adicionar">
          <FiPlusSquare size={25} color="#0984e3" />
        </Link>
      </TitleTable>
      <h2>Nenhum funcioário encontrado</h2>
    </>
  );
}

export default FuncionarioTable;
