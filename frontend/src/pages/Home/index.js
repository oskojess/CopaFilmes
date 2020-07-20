import React from 'react';

import Container from '@material-ui/core/Container';

import Header from '../../components/Header/'
import Filmes from '../../components/Filmes';

const Home = () => (
  <Container>
    <Header
      titulo="Campeonato de Filmes"
      subtitulo="Fase Seleção"
      descricao="Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão gerar Meu Campeonato para prosseguir."
    />
    <Filmes />
  </Container>
)

export default Home;
