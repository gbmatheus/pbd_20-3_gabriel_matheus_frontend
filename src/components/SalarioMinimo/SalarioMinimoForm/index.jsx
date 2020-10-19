import React, { useState } from 'react';

import Form from '../../base/Form';

import meses from '../../../utils/meses.js'

function SalarioMinimoForm(props) {
  const [valor, setValor] = useState('');
  const [mes, setMes] = useState(1);
  const [vigencia, setVigencia] = useState(new Date().getFullYear());
    
  function handleCreateSalarioFamilia(e) {
    e.preventDefault();

    let salarioMinimo = {
      valor, mes, vigencia
    }

    console.log(salarioMinimo);
    
  }

  return (
    <>
      <h3>Salario Mínimo</h3>
      <Form onSubmit={handleCreateSalarioFamilia}>
        <label htmlFor="mes">
            Mês
            <select id="mes"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
            >
              {meses.map((mes) => {
                return (
                <option key={mes.numeroMes} value={mes.numeroMes}>{mes.nome}</option>
                )
              })}
            </select>
          </label>

          <label htmlFor="vigencia">
            Ano
            <input
              type="date.year"
              id="vigencia"
              value={vigencia}
              onChange={(e) => setVigencia(e.target.value)}
            />
          </label>

          <label htmlFor="valor">
            Valor Unitário
            <input
              type="text"
              id="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </label>
        <button>Cadastrar</button>  
      </Form>

    </>
  )
}

export default SalarioMinimoForm;