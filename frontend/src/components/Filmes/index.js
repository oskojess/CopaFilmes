import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { getFilmes } from '../../services/FilmeService';

import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { rodarCampeonato } from '../../services/FilmeService';
import Checkbox from '../Checkbox/';


const ListaFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  const [filmesSelecionados, setSelecionados] = useState([]);
  let history = useHistory();

  useEffect(() => {
    const fetchDados = async () => {
      // const response = await axios('/filmes');
      // const { data } = response;
      // data.sort((a, b) => (a.titulo > b.titulo) ? 1 : -1)

      setFilmes(getFilmes());
    };
    fetchDados();
  }, []);


  function handleSelecionarFilmes(id) {
    const novosFilmes = filmes.map((filme) => {
      return filme.id === id ? { ...filme, checked: !filme.checked } : filme;
    });

    const filtrarFilmes = novosFilmes.filter((item) => {
      return item.checked === true;
    });

    setFilmes(novosFilmes);
    setSelecionados([...filtrarFilmes]);
  }

  function handleClick() {
    rodarCampeonato(filmesSelecionados);
    history.push("/campeoes");
  }

  const classes = useStyles();

  return (

    <>
      <Box component="span" className={classes.box}>
        <Box component="span">
          <Typography component="h3" className={classes.selecionados}>Selecionados: </Typography>
          <Typography color="textSecondary" gutterBottom>{filmesSelecionados.length} de 8</Typography>
        </Box>
        <Button variant="contained" className={classes.upper} onClick={() => handleClick()}>Gerar meu campeonato</Button>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={1} className={classes.card}>
          {filmes.map(filme =>
            <Grid key={filme.id}
              item xs={6}
              sm={3}
              className={classes.grid}>
              <Box component="span">
                <Typography component="p"> {filme.titulo}</Typography>
                <Typography color="textSecondary" gutterBottom> {filme.ano}</Typography>
              </Box>
              <Box component="span">
                <Checkbox
                  titulo={filme.titulo}
                  onChange={() => handleSelecionarFilmes(filme.id)}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 8,
  },
  card: {
    display: "flex",
    justifyContent: "center"
  },
  grid: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    alignItems: "center",
    margin: 8,
    maxWidth: "250px",
    background: "#FFF"
  },

  box: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between"
  },
  upper: {
    textTransform: "upper"
  },
  selecionados: {
    color: "#FFF",
    fontWeight: "bold"
  }
}));

export default ListaFilmes;
