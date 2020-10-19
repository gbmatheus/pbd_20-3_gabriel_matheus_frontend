import React from "react";
import { Link } from "react-router-dom";

import { Header, NavBar, Main } from "./styled";

// import Valores from "../../views/contador/Valores";

import Logo from "../../assets/images/logo.svg";

function Contador(props) {
  return (
    <>
      <Header>
        <img src={Logo} alt="Logo da eniatus" />
        <div>
          <h2>Contador</h2>
          <Link to="/">Sair</Link>
        </div>
      </Header>

      <NavBar>
        <Link to="/contador/funcionarios">Funcionarios</Link>
        <Link to="/contador/valores">Valores Financeiros</Link>
        <Link to="/contador/relatorios">Relatorios</Link>
        <Link to="/contador/conta">Conta</Link>
      </NavBar>

      <Main>{props.children}</Main>
    </>
  );
}

export default Contador;
