import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Header, NavBar, Main } from "./styled";

// import Valores from "../../views/contador/Valores";

import Logo from "../../assets/images/logo.svg";
import { logout } from "../../services/auth";

function Contador(props) {
  let history = useHistory();

  function handleLogout() {
    logout();
    history.push("/");
  }

  return (
    <>
      <Header>
        <img src={Logo} alt="Logo da eniatus" />
        <div>
          <h2>Contador</h2>

          <button onClick={handleLogout}>Sair</button>
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
