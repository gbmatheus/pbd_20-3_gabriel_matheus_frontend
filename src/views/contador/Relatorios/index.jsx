import React from "react";

import { Container } from "./styled";

function Relatorios() {
  return (
    <>
      <Container>
        <h1>Relatórios</h1>
        <div>
          <button>Analitico</button>
          <button>Individual</button>
          <button>Sintetico</button>
        </div>
      </Container>
    </>
  );
}

export default Relatorios;
