import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";

import Table from "../../base/Table";

function InssTable(props) {
  const [inssAtuais, setInssAtuais] = useState(() => {
    const storageInss = localStorage.getItem("@Eniatus:inss");

    // se tiver dads salvos no local storage
    if (storageInss) {
      return JSON.parse(storageInss);
    }

    // se não retornar nada da api ou do local storage
    return [];
  });

  useEffect(() => {
    api
      .get("/inss")
      .then((response) => {
        const inssAtivos = props.ativo
          ? response.data.filter((inss) => {
              return inss.ativo === true;
            })
          : response.date;

        inssAtivos.sort((a, b) => {
          if (a.aliquota > b.aliquota) {
            return 1;
          }
          if (a.aliquota < b.aliquota) {
            return -1;
          }
          return 0;
        });

        setInssAtuais(inssAtivos);
      })
      .catch((error) => {
        console.warn("Ham? ", error);
        console.warn(error.status);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("@Eniatus:inss", JSON.stringify(inssAtuais));
  }, [inssAtuais]);

  return inssAtuais.length !== 0 ? (
    <>
      <h3>Inss</h3>
      <Table>
        <thead>
          <tr>
            <td>Salário de contribuição</td>
            <td>Aliquota</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {inssAtuais.map((inss) => {
            return (
              <tr key={inss.aliquota}>
                <td>
                  De R$ {inss.valorMin} até R$ {inss.valorMax}
                </td>
                <td>{inss.aliquota}%</td>
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
      <p>Nenhum Inss encontrado</p>
    </>
  );
}

export default InssTable;
