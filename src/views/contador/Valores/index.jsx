import React, { useState } from "react";

import { Container, MiniCard, Card } from "./styled";

import SalarioFamiliaInfo from "../../../components/SalarioFamilia/SalarioFamiliaInfo";
import SalarioMinimoInfo from "../../../components/SalarioMinimo/SalarioMinimoInfo";
import InssTable from "../../../components/Inss/InssTable";
import IrrfTable from "../../../components/Irrf/IrrfTable";

import SalarioFamiliaForm from "../../../components/SalarioFamilia/SalarioFamiliaForm";
import SalarioMinimoForm from "../../../components/SalarioMinimo/SalarioMinimoForm";
import IrrfForm from "../../../components/Irrf/IrrfForm";


function Valores() {
  const [addMinimo, setAddMinimo] = useState(false);
  const [addFamilia, setAddFamilia] = useState(false);
  const [addInss, setAddInss] = useState(false);
  const [addIrrf, setAddIrrf] = useState(false);
  
  return (
    <Container>
      <div>
        <MiniCard display={ !addFamilia ? "flex" : "none" }  >
          <SalarioFamiliaInfo />
          <button onClick={e => {e.preventDefault(); setAddFamilia(true)}} >Editar</button>
        </MiniCard>

        <MiniCard display={ addFamilia ? "flex" : "none" }  >
          <SalarioFamiliaForm />
        </MiniCard>

        <MiniCard display={ !addMinimo ? "flex" : "none" }  >
          <SalarioMinimoInfo /> 
          <button onClick={e => {e.preventDefault(); setAddMinimo(true)}} >Editar</button>
        </MiniCard>

        <MiniCard display={ addMinimo ? "flex" : "none" }  >
          <SalarioMinimoForm />
        </MiniCard>

      </div>

      <Card>
        <InssTable />
      </Card>

      <Card>
        <IrrfTable /> 
      </Card>
    </Container>
  );
}

export default Valores;
