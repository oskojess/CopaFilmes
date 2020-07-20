import React from 'react';
import { useLocation, useHistory } from "react-router-dom";

import { Card, CardContent, Container, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/';

const Campeoes = () => {
  let history = useHistory();
  let location = useLocation();
  const campeoes = location.state;

  const classes = useStyles();

  function goBack() {
    history.push("/");
  }

  return (
    <Container>
      <Header
        titulo="Campeonato de Filmes"
        subtitulo="Resultado Final"
        descricao="Veja o resultado final do Campeonato de Filmes de forma simples e rápida"
      />
      <Box className={classes.boxButton}>
        <Button variant="contained" className={classes.upper} onClick={() => goBack()}>Jogar novamente</Button>
      </Box>

      {campeoes.map((campeao, posicao) =>
        <Card key={campeao.id} className={classes.root}>
          <CardContent>
            <Typography variant="h4" component="h2">{campeao.titulo}</Typography>
          </CardContent>
          <CardContent className={classes.campeao}>
            <Box>
              <Typography variant="h4" component="h2">{posicao + 1}</Typography>
            </Box>
          </CardContent>
        </Card>
      )}

    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    marginBottom: 20
  },
  campeao: {
    display: "flex",
    alignItems: "center",
    background: "#484848",
    color: "#FFF",
    fontWeight: "bold",
  },
  upper: {
    textTransform: "upper"
  },
  boxButton: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20
  }
}));

export default Campeoes;
