import React from 'react';

const Checkbox = ({ type = "checkbox", titulo, onChange, checked = false }) => {
  console.log("Checkbox: ", titulo);

  return (
    <input type={type} titulo={titulo} onChange={onChange} checked={checked} />
  );
};

export default Checkbox; 
