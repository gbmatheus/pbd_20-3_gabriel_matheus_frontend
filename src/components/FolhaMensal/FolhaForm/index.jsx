import React from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import ButtonAdd from "../../base/ButtonAdd";
import { DetailsFolha, Field, HeaderFolha, Card } from "./styled";

function FolhaForm() {
  return (
    <>
      <h1>Folha Mensal Form</h1>
      <HeaderFolha>
        <strong>ID</strong>
        <p>Nome do funcionario</p>
        <p>CPF</p>
        <p>Salario</p>
        <p>Data de Adimissao</p>
      </HeaderFolha>
      <DetailsFolha>
        <div>
          <Field>
            Auxilio Alimentação
            <NumberFormat
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={"R$ "}
              displayType="number"
              value={51.3}
              // value={salario.valorDaHora}
              // onChange={(e) =>
              //   setSalario({
              //     ...salario,
              //     valorDaHora: parseFloat(e.target.value.replace("R$ ", "")),
              //   })
              // }
            />
          </Field>
          <Field>
            Horas Extras
            <NumberFormat
              // suffix={" Hrs"}
              format="### Hrs"
              value={10}
              // value={salario.horasContratadas}
              // onChange={(e) =>
              //   setSalario({
              //     ...salario,
              //     horasContratadas: parseInt(
              //       e.target.value.replace(" Hrs/Sem", "")
              //     ),
              //   })
              // }
            />
          </Field>
          <Field>
            Faltas
            <NumberFormat
              format="###"
              value={3}
              // value={funcionario.quantidade_filhos}
              // onChange={(e) =>
              //   setFuncionario({
              //     ...funcionario,
              //     quantidade_filhos: e.target.value,
              //   })
              // }
            />
          </Field>
          <Field>
            Contribuição Sindical
            <NumberFormat
              decimalSeparator={"."}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={"R$ "}
              displayType="number"
              value={51.3}
              // value={salario.valorDaHora}
              // onChange={(e) =>
              //   setSalario({
              //     ...salario,
              //     valorDaHora: parseFloat(e.target.value.replace("R$ ", "")),
              //   })
              // }
            />
          </Field>
        </div>

        <Card>
          <div>
            <strong>Acrescimos</strong>
            <label>
              Descricao
              <input type="text" value={"Não sei o que é"} />
            </label>
            <label>
              Valor
              <NumberFormat
                decimalSeparator={"."}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={"R$ "}
                displayType="number"
                value={51.3}
                // value={salario.valorDaHora}
                // onChange={(e) =>
                //   setSalario({
                //     ...salario,
                //     valorDaHora: parseFloat(e.target.value.replace("R$ ", "")),
                //   })
                // }
              />
            </label>
            <ButtonAdd>Adicionar</ButtonAdd>
          </div>
          <div>
            <strong>Descontos</strong>
            <label>
              Descricao
              <input type="text" value={"Não sei o que é"} />
            </label>
            <label>
              Valor
              <NumberFormat
                decimalSeparator={"."}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={"R$ "}
                displayType="number"
                value={51.3}
                // value={salario.valorDaHora}
                // onChange={(e) =>
                //   setSalario({
                //     ...salario,
                //     valorDaHora: parseFloat(e.target.value.replace("R$ ", "")),
                //   })
                // }
              />
            </label>
            <ButtonAdd>Adicionar</ButtonAdd>
          </div>
        </Card>

        <div>
          <Link to="/admin">Voltar</Link>
          <ButtonAdd>Salvar</ButtonAdd>
        </div>
      </DetailsFolha>
    </>
  );
}

export default FolhaForm;
