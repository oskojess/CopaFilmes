import React from 'react';

import GlobalStyle from './styles/global';

import Container from './components/Container/'

import Main from './pages/Main'

function App() {
  return (

    <Container>
      <Main />
      <GlobalStyle />
    </Container>

  );
}

export default App;
