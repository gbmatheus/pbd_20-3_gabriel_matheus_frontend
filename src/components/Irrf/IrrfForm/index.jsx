import React, { useState } from "react";

import Form from "../../base/Form";

import meses from '../../../utils/meses';

function IrrfForm(params) {

  const [mes, setMes] = useState(1);
  const [vigencia, setVigencia] = useState(new Date().getFullYear());
  const [valorMin, setValorMin] = useState(0);
  const [valorMax, setValorMax] = useState(0);
  const [aliquota, setAliquota] = useState(0);
  const [valorDeduzir, setValorDeduzir] = useState(0);

  function handleCreateInss (e) {
    e.preventDefault();

    const irrf = {
      mes, vigencia, valorMin, valorMax, aliquota
    };
    
    console.log(irrf);
  }

  return (
    <>
      <h3>Inss </h3>
      <Form onSubmit={handleCreateInss}>
        <label htmlFor="mes">
          Mês
          <select 
            id="mes"
            value={mes}
            onChange={(e) => setMes(e.target.value) }
          >
            {meses.map((mes) => {
              return (
              <option key={mes.numeroMes} value={mes.numeroMes}>{ mes.nome }</option>
              )
            })}
          </select>
        </label>
        <label htmlFor="vigencia">
          Ano
          <input
            type="text"
            id="vigencia"
            value={vigencia}
            onChange={(e) => setVigencia(e.target.value)}
          />
        </label>
        <label htmlFor="valorMin">
          Valor Mínimo
          <input
            type="text"
            id="valorMin"
            value={valorMin}
            onChange={(e) => setValorMin(e.target.value)}
          />
        </label>
        <label htmlFor="valorMax">
          Valor Máximo
          <input
            type="text"
            id="valorMax"
            value={valorMax}
            onChange={(e) => setValorMax(e.target.value)}
          />
        </label>
        <label htmlFor="aliquota">
          Aliquota
          <input
            type="text"
            id="aliquota"
            value={aliquota}
            onChange={(e) => setAliquota(e.target.value)}
          />
        </label>
        <label htmlFor="valorDeduzir">
          Valor a Deduzir
          <input
            type="text"
            id="valorDeduzir"
            value={valorDeduzir}
            onChange={(e) => setValorDeduzir(e.target.value)}
          />
        </label>
      </Form>
    </>
  );
}

export default IrrfForm;
