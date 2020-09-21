import React from 'react';

import LabelBase from '../LabelBase';
import InputBase from '../InputBase';
import LinkBase from '../LinkBase';

function FormLogin() {
  return (
    <form>
      
      <LabelBase hmltFor="usuario">Seu usuáio</LabelBase>
      <InputBase type="text"id="usuario" required/>
      
      <LabelBase hmltFor="usuario">Seu usuáio</LabelBase>
      <InputBase type="text"id="usuario" required/>

      <LinkBase />
    </form>
  );
}

export default FormLogin;