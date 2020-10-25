import React, { useEffect, useState } from "react";

import { Link, useRouteMatch } from "react-router-dom";

import api from "../../../services/api";
import capitalize from "../../../utils/capitalize";

import Form from "../../base/Form";
import ButtonAdd from "../../base/ButtonAdd";
import { HeaderInfo, DetailsInfo, Field } from "./styled";

function UsuarioInfo() {
  const { url, params } = useRouteMatch();

  const [usuario, setUsuario] = useState({
    pessoa: {
      cpf: "cpf",
      nome: "Nome",
      dtNascimento: new Date(),
      naturalidade: "naturalidade",
    },
    permissao: [{ nome: "CONTADOR" }],
    login: "login",
    email: "email@mail.com",
    senha: "",
  });

  useEffect(() => {
    api
      .get(`/usuarios/${params.id}`)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.warn(error.status);
      });
  });

  function handleUpdateUsuario(e) {
    e.preventDefault();
    console.log(usuario);
  }

  function alterPassword() {
    api.post().then().catch();
  }

  return (
    <>
      <HeaderInfo>
        <div>
          <strong>{capitalize(usuario.pessoa.nome)}</strong>
        </div>
        <ul>
          <li>
            <span>CPF</span>
            <strong>{usuario.pessoa.cpf}</strong>
          </li>
          <li>
            <span>Nascimento</span>
            <strong>
              {new Date(usuario.pessoa.dt_nascimento).toLocaleDateString()}
            </strong>
          </li>
          <li>
            <span>Naturalidade</span>
            <strong>{capitalize(usuario.pessoa.naturalidade)}</strong>
          </li>
        </ul>
      </HeaderInfo>
      <DetailsInfo>
        <strong>{capitalize(usuario.permissao[0].nome)}</strong>
        <Form onSubmit={handleUpdateUsuario}>
          <div>
            <Field>
              Login
              <input type="text" 
              value={usuario.login}
              onChange={(e) => setUsuario({...usuario, login: e.target.value})}
              />
            </Field>
            <Field>
              Email
              <input type="email" 
              value={usuario.email}
              onChange={(e) => setUsuario({...usuario, email: e.target.value})}
              />
            </Field>
          </div>

          <div>
            <Field>
              Senha
              <input type="password" 
              onChange={(e) => setUsuario({...usuario, senha: e.target.value})}
              />
            </Field>
            <Field>
              Confirmar senha
              <input type="password" 
              onChange={(e) => setUsuario({...usuario, novaSenha: e.target.value})}
              />
            </Field>
          </div>

          <div>
            <Link to={url.replace(`/${params.id}`, "")}>Voltar</Link>
            <ButtonAdd>Salvar</ButtonAdd>
          </div>
        </Form>
      </DetailsInfo>
    </>
  );
}

export default UsuarioInfo;
