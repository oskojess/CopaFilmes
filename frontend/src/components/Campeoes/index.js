import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header/';

import { rodarCampeonato } from '../../services/FilmeService'

const Campeoes = () => {

  const [campeoes, setCampeoes] = useState([]);

  useEffect(() => {
    const fetchCampeonato = async () => {
      setCampeoes(rodarCampeonato())
    };
    fetchCampeonato();
  }, []);


  return (
    <Container>
      <Header
        titulo="Campeonato de Filmes"
        subtitulo="Resultado Final"
        descricao="Veja o resultado final do Campeonato de Filmes de forma simples e rápida"
      />


    </Container>
  )
}

export default Campeoes;
