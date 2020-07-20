import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const SelecionarFilmes = ({ type = "checkbox", titulo, onChange, tabIndex, checked }) => {

  return (
    <Checkbox
      type={type}
      titulo={titulo}
      onChange={onChange}
      checked={checked}
      tabIndex={tabIndex}
      color="default"
      size="medium"
      disableRipple
    />
  );
};

export default SelecionarFilmes; 
