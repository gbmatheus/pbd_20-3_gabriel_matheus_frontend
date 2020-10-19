import React from "react";

import Funcionarios from "../views/contador/Funcionarios";
import FuncionarioTable from "../components/Funcionario/FuncionarioTable";
import FuncionarioForm from "../components/Funcionario/FuncionarioFrom";

import Valores from "../views/contador/Valores";
import Relatorios from "../views/contador/Relatorios";
import Conta from "../views/contador/Conta";
import Contador from "../pages/Contador";
import FuncionarioInfo from "../components/Funcionario/FuncionarioInfo";

export const routesContador = [
  {
    path: "/funcionarios",
    exact: true,
    // sidebar: () => <div>Funcionarios</div>,
    main: () => (
      <Contador>
        <Funcionarios>
          <FuncionarioTable />
        </Funcionarios>
      </Contador>
    ),
  },
  {
    path: "/funcionarios/adicionar",
    exact: true,
    // sidebar: () => <div>Funcionarios</div>,
    main: () => (
      <Contador>
        <Funcionarios>
          <FuncionarioForm button="Adicionar"/>
        </Funcionarios>
      </Contador>
    ),
  },
  {
    path: "/funcionarios/editar",
    exact: true,
    // sidebar: () => <div>Funcionarios</div>,
    main: () => (
      <Contador>
        <Funcionarios>
          <FuncionarioForm button="Salvar"/>
        </Funcionarios>
      </Contador>
    ),
  },
  {
    path: "/funcionarios/info",
    exact: true,
    // sidebar: () => <div>Funcionarios</div>,
    main: () => (
      <Contador>
        <Funcionarios>
          <FuncionarioInfo />
        </Funcionarios>
      </Contador>
    ),
  },
  {
    path: "/valores",
    exact: true,
    // sidebar: () => <div>Valores</div>,
    main: () => (
      <Contador>
        <Valores />
      </Contador>
    ),
  },
  {
    path: "/relatorios",
    exact: true,
    // sidebar: () => <div>Relatórios</div>,
    main: () => (
      <Contador>
        <Relatorios />
      </Contador>
    ),
  },
  {
    path: "/conta",
    exact: true,
    // sidebar: () => <div>Conta</div>,
    main: () => (
      <Contador>
        <Conta />
      </Contador>
    ),
  },
  {
    path: "/",
    exact: true,
    // sidebar: () => <div>Funcionarios</div>,
    main: () => (
      <Contador>
        <h2>Seja bem-vindo!!!</h2>
      </Contador>
    ),
  },
];
