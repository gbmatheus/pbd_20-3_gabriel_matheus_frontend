import React from 'react';
import InputBase from '../InputBase';
import LabelBase from '../LabelBase';

function FieldBase({label, type, id, placeholder, name, required}) {
  return (
    <section>
      <LabelBase htmlFor="{name}">{label}</LabelBase>
      <InputBase type="{type}" id="{id}"
        placeholder="{placeholder}" name="{name}"
      />
    </section>
  )
  
}

export default FieldBase;