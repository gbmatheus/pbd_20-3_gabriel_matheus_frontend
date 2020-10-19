import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import NumberFormat from "react-number-format";

import api from "../../../services/api";
import { path as pathname } from "../../../services/path";
import ButtonAdd from "../../base/ButtonAdd";

function FuncionarioInfo(props) {
  let history = useHistory();
  let location = useLocation();

  let from = pathname(location.pathname);

  const [funcionario, setFuncionario] = useState({
    quantidadeFilhos: 0,
    tipo: "MES",
  });
  const [pessoa, setPessoa] = useState({
    cpf: "",
    nome: "",
    dtNascimento: new Date(
      new Date().getFullYear() - 10,
      new Date().getMonth() - 1,
      new Date().getDate()
    ),
    naturalidade: "",
  });
  const [salario, setSalario] = useState({
    valorDaHora: 0,
    horasContratadas: 0,
  });

  function handleCreateFuncionario(e) {
    e.preventDefault();

    const dt_nascimento = new Date(pessoa.dtNascimento);
    setPessoa({ ...pessoa, dt_nascimento });

    const funcionarioApi = { ...funcionario, pessoa, salario };

    api
      .post("/funcionarios", funcionarioApi)
      .then((response) => {
        alert("Funcionario criado com sucesso");
        history.push(from);
      })
      .catch((error) => {
        alert("Verifique se todos os campos foram preenchidos corretamentes");
      });

    console.log(funcionarioApi);
  }

  return (
    <>
      <h3>Dados Pessoais</h3>

      <label htmlFor="nome">
        <p>
          Nome: <strong>Nome Completo</strong>
        </p>
      </label>

      <label htmlFor="cpf">
        <p>
          CPF: <strong>Nome Completo</strong>
        </p>
      </label>

      <label htmlFor="nascimento">
        <p>
          Data de Nascimento: <strong>Nome Completo</strong>
        </p>
      </label>
      <label htmlFor="naturalidade">
        <p>
          Naturalidade: <strong>Nome Completo</strong>
        </p>
      </label>
      <label htmlFor="filhos">
        <p>
          Filhos: <strong>Nome Completo</strong>
        </p>
      </label>
      <label htmlFor="nome">
        <p>
          Nome: <strong>Nome Completo</strong>
        </p>
      </label>
      <h3>Dados do Funcionário</h3>

      <label htmlFor="tipo">
        <p>
          Tipo: <strong>Nome Completo</strong>
        </p>
      </label>
      <label htmlFor="salario">
        <p>
          Salario: <strong>Nome Completo</strong>
        </p>
      </label>
      <label htmlFor="valor">
        <p>
          Valor da Hora: <strong>Nome Completo</strong>
        </p>
      </label>
      <label htmlFor="horas">
        <p>
          Horas contratadas: <strong>Nome Completo</strong>
        </p>
      </label>

      <label htmlFor="horas">
        <p>
          Trabalhando: <strong>Nome Completo</strong>
        </p>
      </label>

      <label htmlFor="tipo">
        Tipo
        <select
          name="tipo"
          id="tipo"
          value={funcionario.tipo}
          onChange={(e) =>
            setFuncionario({ ...funcionario, tipo: e.target.value })
          }
        >
          <option value="MES">Mensalista</option>
          <option value="HORA">Horista</option>
        </select>
      </label>

      <div>
        <label htmlFor="horas">
          Horas Contratadas <small> Horas/Semana</small>
          <input
            type="text"
            id="horas"
            value={salario.horasContratadas}
            placeholder="Horas/Semana"
            onChange={(e) =>
              setSalario({ ...salario, horasContratadas: e.target.value })
            }
            disabled={funcionario.tipo === "MES" ? true : false}
          />
        </label>

        <label htmlFor="valorHora">
          Valor da Hora<small> R$</small>
          <input
            type="text"
            id="valorHora"
            placeholder="R$"
            value={salario.valorDaHora}
            onChange={(e) =>
              setSalario({ ...salario, valorDaHora: e.target.value })
            }
            disabled={funcionario.tipo === "MES" ? true : false}
          />
        </label>
      </div>

      <ButtonAdd>{props.button}</ButtonAdd>
      <Link to={`${from}`}>Voltar</Link>
    </>
  );
}

export default FuncionarioInfo;
