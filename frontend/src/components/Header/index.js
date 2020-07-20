import React from 'react';
import { Card, Typography, Divider, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Header = ({ titulo, subtitulo, descricao }) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography component="h2" color="textSecondary" className={classes.bold}>{titulo}</Typography>
        <Typography variant="h4" component="h1" className={classes.boldWhite}> {subtitulo}</Typography>
        <Divider variant="middle" />
        <Typography component="h3" className={classes.boldWhite}>{descricao}</Typography>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "40px 0px",
    padding: 40,
    background: "#939191"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    fontWeight: "bold",
    color: "#F5F5F5",
  },
  boldWhite: {
    color: "#FFF",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold"
  }
}));

export default Header; 
