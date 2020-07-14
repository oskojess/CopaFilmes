import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Checkbox from '../Checkbox/'

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('/filmes')
      setMovies(response.data)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = movies.filter(movie => movie.checked);

    document.title = `Você selecionou ${filtered.length} filmes`
  }, [movies])

  function handleSelectFilmes(id) {
    const newMovies = movies.map(movie => {
      return movie.id === id ? { ...movie, checked: !movie.checked } : movie
    });
    setMovies(newMovies)
  };

  return (


    <div>{movies.map(movie =>
      <div key={movie.id}>
        {movie.titulo}
        {movie.ano}
        <Checkbox
          titulo={movie.titulo}
          onClick={() => handleSelectFilmes(movie.id)}
        />
      </div>)}
    </div>
  )
}


export default MovieList;
