import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import NumberFormat from 'react-number-format';

import api from "../../../services/api";
import {path as pathname} from '../../../services/path'
import ButtonAdd from "../../base/ButtonAdd";

function FuncionarioForm(props) {
  let history = useHistory();
  let location = useLocation();
  let from = pathname(location.pathname)


  const [funcionario, setFuncionario] = useState({
    quantidadeFilhos: 0,
    tipo: "MES",
  });
  const [pessoa, setPessoa] = useState({
    cpf: "",
    nome: "",
    dtNascimento: new Date(new Date().getFullYear() - 18, new Date().getMonth() - 1, new Date().getDate()),
    naturalidade: "",
  });
  const [salario, setSalario] = useState({
    valorDaHora: 0,
    horasContratadas: 0,
  });

  function handleCreateFuncionario(e) {
    e.preventDefault();
    
    const dt_nascimento = new Date(pessoa.dtNascimento);
    setPessoa({...pessoa, dt_nascimento});
  
    const funcionarioApi = { ...funcionario, pessoa, salario } 

    api.post('/funcionarios', funcionarioApi).then(response => {
      alert("Funcionario criado com sucesso")
      history.push(from)

    }).catch(error => {
      alert("Verifique se todos os campos foram preenchidos corretamentes");
    })
    
    console.log(funcionarioApi);
  }

  return (
    <form onSubmit={handleCreateFuncionario}>
      <h3>Dados Pessoais</h3>

      <label htmlFor="nome">
        Nome
        <input
          type="text"
          id="nome"
          placeholder="Nome completo"
          value={pessoa.nome}
          onChange={(e) => setPessoa({ ...pessoa,  nome:e.target.value})}
        />
      </label>

      <div>
      <label htmlFor="cpf">
          CPF
          <NumberFormat
            format="###.###.###-##"
            id="cpf"
            value={pessoa.cpf}
            onChange={(e) => setPessoa({ ...pessoa,  cpf:e.target.value})}
          />
        </label>
        <label htmlFor="nascimento">
          Data de Nascimento
          <input
            type="date"
            id="nascimento"
            max={`${new Date().getFullYear() - 18}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            // value={`${new Date().getFullYear() - 18}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            onChange={(e) => setPessoa({ ...pessoa,  dtNascimento:e.target.value})}
          />
        </label>
      </div>

      <div>
        <label htmlFor="qtd_filhos">
          Filhos
          <input
            type="text"
            id="qtd_filhos"
            value={funcionario.quantidadeFilhos}
            onChange={(e) => setFuncionario({ ...funcionario, quantidadeFilhos: e.target.value})}
          />
        </label>

        <label htmlFor="naturalidade">
          Naturalidade
          <input
            type="text"
            id="naturalidade"
            placeholder="Cidade - UF"
            value={pessoa.naturalidade}
            onChange={(e) => setPessoa({ ...pessoa, naturalidade: e.target.value})}
          />
        </label>
      </div>

      <h3>Dados do Funcionário</h3>

      <label htmlFor="tipo">
        Tipo
        <select
          name="tipo"
          id="tipo"
          value={funcionario.tipo}
          onChange={(e) => setFuncionario({ ...funcionario, tipo: e.target.value})}
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
            onChange={(e) => setSalario({ ...salario, horasContratadas:e.target.value})}
            disabled={ funcionario.tipo === 'MES' ? true : false }
          />
        </label>

        <label htmlFor="valorHora">
          Valor da Hora<small> R$</small>
          <input
            type="text"
            id="valorHora"
            placeholder="R$"
            value={salario.valorDaHora}
            onChange={(e) => setSalario({ ...salario, valorDaHora:e.target.value})}
            disabled={ funcionario.tipo === 'MES' ? true : false }
          />
        </label>
      </div>

      <ButtonAdd>{props.button}</ButtonAdd>
      <Link to={`${from}`}>Voltar</Link>
    </form>
  );
}

export default FuncionarioForm;
