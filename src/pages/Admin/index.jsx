import React from "react";
import { Link, useHistory } from "react-router-dom";

import { logout } from "../../services/auth";
import { Container, Content, Header, SideBar, Main } from "./styled";

function Admin(props) {
  let history = useHistory() 

  function handleLogout () {
    logout()
    history.push("/")
  }

  return (
    <>
      <Container>
        <SideBar>
          <h2>Admin</h2>
          <Link to="/admin/usuarios">Usuarios</Link>
          <Link to="/admin/funcionarios" >Funcionários</Link>
          <Link to="/admin/folha">Folha de Pagamento</Link>
          <Link to="/admin/relatorios">Relatorios</Link>
          <small>Salários</small>
          <hr />
          <Link to="/admin/minimo">Mínimos</Link>
          <Link to="/admin/familia">Família</Link>
          <small>Impostos</small>
          <hr />
          <Link to="/admin/inss" >Inss</Link>
          <Link to="/admin/irrf" >Irrf</Link>
        </SideBar>

        <Content>
          <Header>
            <h2>Cabeçalho</h2>
            <form>
              <input type="text" placeholder="O que queres rapaz" />
              <button>Buscar</button>
            </form>
            <button onClick={handleLogout}>Sair</button>
          </Header>

          <Main>
            {props.children}
          </Main>
        </Content>
      </Container>
    </>
  );
}

export default Admin;
