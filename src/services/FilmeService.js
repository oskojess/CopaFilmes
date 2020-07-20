import axios from 'axios'

const api = axios.create({ baseURL: "https://localhost:5001/filme/api" })

export async function rodarCampeonato(filmes) {
  try {
    const response = await api.post('/campeonato', filmes)
    console.log('response', response)
    return response;
  }
  catch (err) {
    console.log(err)
  }
};

export async function getFilmes() {
  try {
    const response = await api.get('/filmes')
    console.log('response', response)
    return response;
  }
  catch (err) {
    console.log(err)
  }
};