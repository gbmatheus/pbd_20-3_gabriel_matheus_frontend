import React from "react";

import Admin from "../pages/Admin";

import FuncionarioTable from "../components/Funcionario/FuncionarioTable";
import FuncionarioForm from "../components/Funcionario/FuncionarioFrom";

import UsuarioTable from "../components/Usuario/UsuarioTable";
import UsuarioForm from "../components/Usuario/UsuarioForm";

// import Valores from "../views/contador/Valores";
import Relatorios from "../views/contador/Relatorios";
import SalarioMinimoTable from "../components/SalarioMinimo/SalarioMinimoTable";
import FolhaTable from "../components/FolhaMensal/FolhaTable";
// import Conta from "../views/contador/Conta";

export const routesAdmin = [
  {
    path: "/usuarios",
    exact: true,
    main: () => (
      <Admin>
        <UsuarioTable />
      </Admin>
    ),
  },
  {
    path: "/usuarios/adicionar",
    exact: true,
    main: () => (
      <Admin>
        <UsuarioForm />
      </Admin>
    ),
  },
  {
    path: "/usuarios/info",
    exact: true,
    main: () => (
      <Admin>
        <UsuarioForm />
      </Admin>
    ),
  },
  {
    path: "/funcionarios",
    exact: true,
    main: () => (
      <Admin>
        <FuncionarioTable />
      </Admin>
    ),
  },
  {
    path: "/funcionarios/adicionar",
    exact: true,
    main: () => (
      <Admin>
        <FuncionarioForm button="Adicionar" />
      </Admin>
    ),
  },
  {
    path: "/funcionarios/editar",
    exact: true,
    main: () => (
      <Admin>
        <FuncionarioForm button="Salvar" />
      </Admin>
    ),
  },
  {
    path: "/funcionarios/info",
    exact: true,
    main: () => (
      <Admin>
        <FuncionarioForm />
      </Admin>
    ),
  },
  {
    path: "/relatorios",
    exact: true,
    main: () => (
      <Admin>
        <Relatorios />
      </Admin>
    ),
  },
  {
    path: "/folha",
    exact: true,
    main: () => (
      <Admin>
        <FolhaTable />
      </Admin>
    ),
  },
  {
    path: "/minimo",
    exact: true,
    main: () => (
      <Admin>
        <SalarioMinimoTable />
      </Admin>
    ),
  },
  {
    path: "/familia",
    exact: true,
    main: () => (
      <Admin>
        <h2>Salario familia</h2>
      </Admin>
    ),
  },
  {
    path: "/inss",
    exact: true,
    main: () => (
      <Admin>
        <h2>Inss</h2>
      </Admin>
    ),
  },
  {
    path: "/irrf",
    exact: true,
    main: () => (
      <Admin>
        <h2>Irrf</h2>
      </Admin>
    ),
  },
  {
    path: "/conta",
    exact: true,
    main: () => (
      <Admin>
        <h2>Conta</h2>
      </Admin>
    ),
  },
  {
    path: "",
    exact: true,
    main: () => (
      <Admin>
        <h2>Seja bem-vindo!!!</h2>
      </Admin>
    ),
  },
];
