import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit, FiInfo, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import Table from "../../base/Table";
import TitleTable from "../../base/TitleTable";

function FolhaInfo() {
  const [folhasPagamento, setFolhasPagamentos] = useState(() => {
    const storageFolhas = localStorage.getItem("@Eniatus:folhasPagamento");

    if (storageFolhas) {
      return JSON.parse(storageFolhas);
    }

    return [];
  });
  
  useEffect(() => {
    api
      .get("/folha-de-pagamento")
      .then((response) => {
        console.log(response.data);
        setFolhasPagamentos(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "@Eniatus:folhasPagamento",
  //     JSON.stringify(folhasPagamento)
  //   );
  // }, [folhasPagamento]);

  return folhasPagamento[0] !== null ? (
    <>
      <TitleTable>
        <h3>Salarios minimos</h3>
      </TitleTable>{" "}
      <div>
        <p>
          Funcionario <strong>folhasPagamento[0].funcionario[0].pessoa.nome</strong>
        </p>
        <p>
          CPF <strong>folhasPagamento[0].funcionario[0].pessoa.cpf</strong>
        </p>
        <p>
          Salario <strong>
            
          folhasPagamentos[0].funcionario[0].salario.valorDaHora *
                    folhasPagamentos[0].funcionario[0].salario.horasContratadas *
                    folhasPagamentos[0].funcionario[0].salario.quantSemanas

          </strong>
        </p>
        <p>
          Periodo <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          Inss <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          Irrf <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          CPF <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          Salario <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          Periodo <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          Inss <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          Irrf <strong>folhasPagamento[0].</strong>
        </p>
        <p>
          <Link to="/admin/folha">Voltar</Link>

          <button>
            <FiEdit size={25} color="#fdcb6e" />
          </button>

          <button>
            <FiTrash2 size={25} color="#d63031" />
          </button>
        </p>
      </div>
    </>
  ) : (
    <>
      <h3>Folhas de Pagameento</h3>
      <p>Nenhuma folha de pagamento encontrada</p>
    </>
  );
}

export default FolhaInfo;
