import React, { useState } from 'react';

import Form from '../../base/Form';

import api from '../../../services/api';

import meses from '../../../utils/meses.js'

function SalarioFamiliaForm(params) {
  const [remuneracao, setRemuneracao] = useState(0);
  const [valorUnitario, setValorUnitario] = useState(0);
  const [mes, setMes] = useState(1);
  const [vigencia, setVigencia] = useState(new Date().getFullYear());
  
  function handleCreateSalarioFamilia(e) {
    e.preventDefault();

    let salarioFamilia = {
      remuneracao, valorUnitario, mes, vigencia
    }

    api.post('/salario-familia', salarioFamilia)
      .then((response) => {
        console.log('Nice ',response);
      }).catch((error) => {
        console.log('Ham? ',error);
      });

  }

  return (
    <>
      <h3>Salario Família</h3>
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

          <label htmlFor="remuneracao">
            Remuneração
            <input
              type="text"
              id="remuneracao"
              value={remuneracao}
              onChange={(e) => setRemuneracao(e.target.value)}
            />
          </label>

          <label htmlFor="valorUnitario">
            Valor Unitário
            <input
              type="text"
              id="valorUnitario"
              value={valorUnitario}
              onChange={(e) => setValorUnitario(e.target.value)}
            />
          </label>
        <button>Cadastrar</button>  
      </Form>

    </>
  )
}

export default SalarioFamiliaForm;