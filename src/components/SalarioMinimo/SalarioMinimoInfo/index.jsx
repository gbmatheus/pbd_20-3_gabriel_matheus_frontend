import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";

function SalarioMinimoInfo() {
  // eslint-disable-next-line
  const [salarioMinimo, setSalarioMinimo] = useState(() => {
    const storageSalarioMinimo = localStorage.getItem(
      "@Eniatus:salarioMinimo"
    );

    // se tiver dads salvos no local storage
    if (storageSalarioMinimo) {
      return JSON.parse(storageSalarioMinimo);
    }

    // se não retornar nada da api ou do local storage
    return {
      mes: new Date().getMonth() + 1,
      vigencia: new Date().getFullYear(),
      valor: 0.0
    };
  });

  // Pegar dados da api
  useEffect(() => {
    api
      .get("/salario-minimo")
      .then((response) => {
        const salario = response.data.filter((salario) => {
          return salario.ativo === true;
        });
        console.log(response.status);
        setSalarioMinimo(salario[0]);
      })
      .catch((error) => {
        console.log(error.status);
        // console.warn("Ham? ", error);
      });
  }, []);

  // Atualizar dados do local storage
  // useEffect(() => {
  //   localStorage.setItem(
  //     "@Eniatus:salarioMinimo",
  //     JSON.stringify(salarioMinimo)
  //   );
  // }, [salarioMinimo]);

  return (
    <>
      <h3>
        Salário Mínimo {`${salarioMinimo.mes}/${salarioMinimo.vigencia}`}
      </h3>
      <p>R$: {salarioMinimo.valor}</p>
    </>
  );
}

export default SalarioMinimoInfo;
