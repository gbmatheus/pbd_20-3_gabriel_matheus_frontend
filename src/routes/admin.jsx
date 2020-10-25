import React from "react";

import Admin from "../pages/Admin";

import FuncionarioTable from "../components/Funcionario/FuncionarioTable";
import FuncionarioForm from "../components/Funcionario/FuncionarioFrom";

import UsuarioTable from "../components/Usuario/UsuarioTable";
import UsuarioForm from "../components/Usuario/UsuarioForm";

import InssTable from "../components/Inss/InssTable";
import IrrfTable from "../components/Irrf/IrrfTable";

// import Valores from "../views/contador/Valores";
import Relatorios from "../views/contador/Relatorios";
import SalarioMinimoTable from "../components/SalarioMinimo/SalarioMinimoTable";
import FolhaTable from "../components/FolhaMensal/FolhaTable";
import UsuarioInfo from "../components/Usuario/UsuarioInfo";
import FuncionarioInfo from "../components/Funcionario/FuncionarioInfo";
import SalarioFamiliaTable from "../components/SalarioFamilia/SalarioFamiliaTable";
import FolhaForm from "../components/FolhaMensal/FolhaForm";
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
    path: "/usuarios/:id",
    exact: true,
    main: () => (
      <Admin>
        <UsuarioInfo />
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
    path: "/funcionarios/:id",
    exact: true,
    main: () => (
      <Admin>
        <FuncionarioInfo />
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
    path: "/folha/info",
    exact: true,
    main: () => (
      <Admin>
        <FolhaForm />
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
        <SalarioFamiliaTable />
      </Admin>
    ),
  },
  {
    path: "/inss",
    exact: true,
    main: () => (
      <Admin>
        <InssTable active={false} />
      </Admin>
    ),
  },
  {
    path: "/irrf",
    exact: true,
    main: () => (
      <Admin>
        <IrrfTable active={false} />
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
