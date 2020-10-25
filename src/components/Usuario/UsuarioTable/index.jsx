import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlusSquare, FiInfo, FiTrash2 } from "react-icons/fi";

import api from "../../../services/api";

import Table from "../../base/Table";
import TitleTable from "../../base/TitleTable";

function UsuarioTable() {
  const [meuUsuario, setMeuUsuario] = useState("");
  const [usuarios, setUsuarios] = useState(() => {
    const storageUsuarios = localStorage.getItem("@Eniatus:usuarios");

    if (storageUsuarios) {
      return JSON.parse(storageUsuarios);
    }

    return [];
  });

  useEffect(() => {
    // Se o usuario já foi autenticado
    const storageUsuarioAuth = localStorage.getItem("@Eniatus:usuarioAuth");
    const usuario = JSON.parse(storageUsuarioAuth);
    setMeuUsuario(usuario);

    api
      .get("/usuarios", { auth: usuario })
      .then((response) => {
        response.data.map((usuarios) => {
          const nascimento = new Date(usuarios.pessoa.dt_nascimento);

          usuarios.pessoa.nascimento = `${nascimento.getDay()}/${
            nascimento.getMonth() + 1
          }/${nascimento.getFullYear()}`;

          return usuarios;
        });
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.warn(error.status);
      });
  }, []);

  // Atualizar dados do local storage
  useEffect(() => {
    localStorage.setItem("@Eniatus:usuarios", JSON.stringify(usuarios));
  }, [usuarios]);
  return (
    <>
      <TitleTable>
        <h3>Lista usuarios</h3>
        <Link to="/admin/usuarios/adicionar">
          <FiPlusSquare size={25} color="#0984e3" />
        </Link>
      </TitleTable>
      <Table>
        <thead>
          <tr>
            <td>Nome </td>
            <td>Usuario</td>
            <td>Email</td>
            <td>Tipo</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {usuarios
            .filter((usuario) => usuario.login !== meuUsuario.username)
            .map((usuario) => {
              return (
                <tr key={usuario.id}>
                  <td>{usuario.pessoa.nome}</td>
                  <td>{usuario.login}</td>
                  <td>{usuario.email}</td>
                  <td>
                    {usuario.tipo === "ADMIN" ? "Administrador" : "Contador"}
                  </td>
                  <td>
                    <Link to={`/admin/usuarios/${usuario.id}`} >
                      <FiInfo size={25} color="#55efc4" />
                    </Link>
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
  );
}

export default UsuarioTable;
