import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";

function SalarioFamiliaInfo() {
  // eslint-disable-next-line
  const [salarioFamilia, setSalarioFamilia] = useState(() => {
    const storageSalarioFamilia = localStorage.getItem(
      "@Eniatus:salarioFamilia"
    );

    // se tiver dads salvos no local storage
    if (storageSalarioFamilia) {
      return JSON.parse(storageSalarioFamilia);
    }

    // se não retornar nada da api ou do local storage
    return {
      mes: new Date().getMonth() + 1,
      vigencia: new Date().getFullYear(),
      remuneracao: 0.0,
      valorUnitario: 0.0,
    };
  });

  // Pegar dados da api
  useEffect(() => {
    // Se o usuario já foi autenticado
    const storageUsuarioAuth = localStorage.getItem("@Eniatus:usuarioAuth");
    const usuario = JSON.parse(storageUsuarioAuth);

    api
      .get("/salario-familia", { auth: usuario })
      .then((response) => {
        const salario = response.data.filter((salario) => {
          return salario.ativo === true;
        });
        setSalarioFamilia(salario[0]);
      })
      .catch((error) => {
        console.warn("Ham? ", error);
        console.warn(error.status);
      });
  }, []);

  // Atualizar dados do local storage
  useEffect(() => {
    localStorage.setItem(
      "@Eniatus:salarioFamilia",
      JSON.stringify(salarioFamilia)
    );
  }, [salarioFamilia]);

  return (
    <>
      <h3>
        Salário Família {`${salarioFamilia.mes}/${salarioFamilia.vigencia}`}{" "}
      </h3>
      <p>R$: {salarioFamilia.valorUnitario}</p>
      <small>Salário: {salarioFamilia.remuneracao}</small>
    </>
  );
}

export default SalarioFamiliaInfo;
