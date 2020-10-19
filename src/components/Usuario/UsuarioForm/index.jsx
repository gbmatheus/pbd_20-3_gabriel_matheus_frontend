import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import NumberFormat from "react-number-format";

import Form from "../../base/Form";
import ButtonAdd from "../../base/ButtonAdd";

import { path as pathname } from "../../../services/path";
import api from "../../../services/api";


function UsuarioForm() {
  let history = useHistory();
  let location = useLocation();
  let from = pathname(location.pathname);


  const [pessoa, setPessoa] = useState({
    cpf: "",
    nome: "",
    dtNascimento: new Date(new Date().getFullYear() - 80, new Date().getMonth() - 1, new Date().getDate()),
    naturalidade: "",
  });
  const [permissao, setPermissao] = useState("CONTADOR");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCreateUsuario(e) {
    e.preventDefault();
  
    const dt_nascimento = new Date(pessoa.dtNascimento);
  
    const user = {
      pessoa: {dt_nascimento, ...pessoa},
      permissoes: [{ nome: permissao }],
      login,
      email,
      senha,
    };

    api.post('/usuarios', user).then(response => {
      alert('Usuário criado com sucesso')
      history.push(from);
    }).catch(error => {
      alert('Verifique se todos os campos foram preenchidos corretamente')
      console.warn(error)
    })


  }

  return (
    <Form onSubmit={handleCreateUsuario}>
      <label>
        Tipo
        <select
          value={permissao}
          onChange={(e) => setPermissao(e.target.value)}
        >
          <option value="ADMIN">Administrador</option>
          <option value="CONTADOR">Contador</option>
        </select>
      </label>
      
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

      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="login">
        Usuário
        <input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>
      <label htmlFor="confirm_senha">
        Confirmar senha
        <input type="password" id="confirm_senha" />
      </label>
      <div>
        <ButtonAdd>Cadastrar</ButtonAdd>
        <Link to={from}>Voltar</Link>
      </div>
    </Form>
  );
}

export default UsuarioForm;
