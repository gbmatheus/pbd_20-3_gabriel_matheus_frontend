import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";
import currency from "../../../utils/currency";

import Table from "../../base/Table";

function IrrfTable(props) {
  const [irrfAtuais, setIrrfAtuais] = useState(() => {
    const storageIrrf = localStorage.getItem("@Eniatus:irrf");

    // se tiver dads salvos no local storage
    if (storageIrrf) {
      return JSON.parse(storageIrrf);
    }

    // se não retornar nada da api ou do local storage
    return [];
  });

  useEffect(() => {
    api
      .get("/irrf")
      .then((response) => {
        const irrfAtivos = props.active
          ? response.data.filter((irrf) => {
              return irrf.ativo === true;
            })
          : response.data;

        irrfAtivos.sort((a, b) => {
          if (a.baseCalculoMin > b.baseCalculoMin) {
            return 1;
          }
          if (a.baseCalculoMin < b.baseCalculoMin) {
            return -1;
          }
          return 0;
        });

        console.log(irrfAtivos);
        setIrrfAtuais(irrfAtivos);
      })
      .catch((error) => {
        console.warn("Ham? ", error);
        console.warn(error.status);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("@Eniatus:irrf", JSON.stringify(irrfAtuais));
  }, [irrfAtuais]);

  return irrfAtuais.length !== 0 ? (
    <>
      <h3>Irrf</h3>
      <Table>
        <thead>
          <tr>
            <td>Base de cálculo</td>
            <td>Aliquota</td>
            <td>Parcela a Deduzir</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {irrfAtuais.map((irrf) => {
            return (
              <tr key={irrf.aliquota}>
                {irrf.baseCalculoMax !== 0 ? (
                  <td>
                    De {currency(irrf.baseCalculoMin)} até{" "}
                    {currency(irrf.baseCalculoMax)}
                  </td>
                ) : (
                  <td>A cima de {currency(irrf.baseCalculoMin)}</td>
                )}
                <td>{irrf.aliquota} %</td>
                <td>{currency(irrf.valorDeduzir)}</td>
                <td>
                  <Link to="/">Editar</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  ) : (
    <>
      <h3>Inss</h3>
      <p>Nenhum Irrf encontrado</p>
    </>
  );
}

export default IrrfTable;
