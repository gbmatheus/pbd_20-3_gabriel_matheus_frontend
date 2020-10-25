import React, { useState, useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import NumberFormat from "react-number-format";

import api from "../../../services/api";
import capitalize from "../../../utils/capitalize";

import Form from "../../base/Form";
import ButtonAdd from "../../base/ButtonAdd";
import { DetailsInfo, Field, HeaderInfo } from "./styled";

function FuncionarioInfo(props) {
  const { url, params } = useRouteMatch();

  let history = useHistory();

  let from = url.replace(`/${params.id}`, "");

  const [salario, setSalario] = useState({
    horasContratadas: 0,
    valorDaHora: 0,
  });

  const [funcionario, setFuncionario] = useState({
    quantidadeFilhos: 0,
    tipo: "MES",
    pessoa: {
      cpf: "000.000.000-00",
      nome: "Funcionario",
      dtNascimento: new Date(),
      naturalidade: "brasil",
    },
    salario: {
      valorDaHora: 0,
      horasContratadas: 0,
    },
  });

  useEffect(() => {
    api
      .get(`/funcionarios/${params.id}`)
      .then((response) => {
        setFuncionario(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
      // eslint-disable-next-line
  },[]);

  function handelUpdateFuncionario(e) {
    e.preventDefault();

    console.log(salario);

    setFuncionario({ salario, ...funcionario });

    api
      .put(`/funcionarios/${params.id}`, funcionario)
      .then((response) => {
        alert("Salvo");
        history.push(from);
      })
      .catch((error) => {
        alert("Verifique se todos os campos foram preenchidos corretamentes");
      });
  }
  return (
    <>
      <HeaderInfo>
        <div>
          <strong>{capitalize(funcionario.pessoa.nome)}</strong>
        </div>
        <ul>
          <li>
            <span>CPF</span>
            <strong>{funcionario.pessoa.cpf}</strong>
          </li>
          <li>
            <span>Nascimento</span>
            <strong>
              {new Date(funcionario.pessoa.dt_nascimento).toLocaleDateString()}
            </strong>
          </li>
          <li>
            <span>Naturalidade</span>
            <strong>{capitalize(funcionario.pessoa.naturalidade)}</strong>
          </li>
        </ul>
      </HeaderInfo>
      {/* {salario.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} */}
      <DetailsInfo>
        <Form onSubmit={handelUpdateFuncionario}>
          <div>
            <Field>
              Filhos
              <NumberFormat
                value={funcionario.quantidade_filhos}
                onChange={(e) =>
                  setFuncionario({
                    ...funcionario,
                    quantidade_filhos: e.target.value,
                  })
                }
              />
            </Field>
            <Field>
              Tipo
              <select
                name="tipo"
                id="tipo"
                value={funcionario.tipo}
                onChange={(e) =>
                  setFuncionario({
                    ...funcionario,
                    tipo: e.target.value,
                  })
                }
              >
                <option value="MES">Mensalista</option>
                <option value="HORA">Horista</option>
              </select>
            </Field>
            <Field>
              Horas Contratadas
              <NumberFormat
                disabled={funcionario.tipo === "MES"}
                suffix={" Hrs/Sem"}
                value={funcionario.salario.horasContratadas}
                onChange={(e) =>
                  setFuncionario({
                    ...funcionario, salario: {
                    valorDaHora: salario.valorDaHora,
                    horasContratadas: parseInt(
                      e.target.value.replace(" Hrs/Sem", "")
                    ),
                    }
                  })
                }
              />
            </Field>

            <Field>
              Valor da Hora
              <NumberFormat
                disabled={funcionario.tipo === "MES"}
                decimalSeparator={"."}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={"R$ "}
                displayType="number"
                value={funcionario.salario.valorDaHora}
                onChange={(e) =>
                  setFuncionario({
                    ...funcionario, salario: {
                    horasContratadas: salario.horasContratadas,
                    valorDaHora: parseFloat(e.target.value.replace("R$ ", "")),
                    }
                  })
                }
              />
            </Field>
          </div>

          <div>
            <Link to={from}>Voltar</Link>
            <ButtonAdd>Salvar</ButtonAdd>
          </div>
        </Form>
      </DetailsInfo>
    </>
  );
}

export default FuncionarioInfo;
