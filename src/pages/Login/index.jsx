import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import api from "../../services/api";
import {login} from '../../services/auth'

import { Container, Title, ImageLogo, Form } from "./styled";

function Login() {
  const [usuario, setUsuario] = useState({ login: "", senha: "" });

  let history = useHistory();
  let location = useLocation();
  let {from} = location.state || { from: { pathname: "/" }};

  function handleLogin(e) {
    e.preventDefault();
    
    api
      .post(
        "/login",
        usuario
      )
      .then((response) => {
        localStorage.setItem("@Eniatus:usuario", JSON.stringify(response.data));
        const permissao = response.data.permissoes[0].nome.toLowerCase()
        
        login({...usuario, permissao});
        from = permissao !== null && permissao === "contador" ? "/contador" : "/admin"

        history.replace(from);
      })
      .catch((error) => {
        console.warn((error));
      });
  }

  return (
    <Container>
      <ImageLogo src={logoImg} alt="Logo eniatus" />
      <Form onSubmit={handleLogin}>
        <Title>Informe seus dados</Title>

        <div className="field">
          <input
            placeholder="Seu usuário"
            type="text"
            onChange={(e) => setUsuario({ ...usuario, login: e.target.value })}
          />
        </div>

        <div className="field">
          <input
            placeholder="Sua senha"
            type="password"
            onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
          />
        </div>

        <button>Entrar</button>

        {/* tag a para esquecer senha */}
        <Link to="/">
          <small className="btn-anchor">Esqueceu a senha?</small>
        </Link>
        <div className="button-gruop">
          <Link to="/admin">
            <small>Admin</small>
          </Link>
          <Link to="/contador">
            <small>Contador</small>
          </Link>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
