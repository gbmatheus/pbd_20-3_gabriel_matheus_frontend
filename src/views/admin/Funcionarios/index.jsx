import React from "react";

import { Container, Card } from "./styled";

function Funcionarios(props) {
  return (
    <>
      <Container>
        <Card>
          {props.children}
        </Card>
      </Container>
    </>
  );
}

export default Funcionarios;
