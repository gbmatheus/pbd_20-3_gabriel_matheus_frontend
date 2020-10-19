import React from "react";
import { Link } from "react-router-dom";

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
