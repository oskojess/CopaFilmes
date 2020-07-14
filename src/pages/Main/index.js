import React from 'react';

import Card from '../../components/Card/'
import MovieList from '../../components/MovieList';

const Main = () => (
  <div>
    <Card
      title="Campeonato de Filmes"
      subtitle="Fase Seleção"
      description="Selecione 8 filmes que você deseja que entrem na competição
    e depois pressione o botão gerar Meu Campeonato para prosseguir."
    />
    <MovieList />
  </div>
)

export default Main;
