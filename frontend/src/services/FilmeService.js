import axios from 'axios'

const api = axios.create({
  baseURL: "https://localhost:5001/filme/api",
});

export async function rodarCampeonato(filmes) {
  try {
    const response = await api.post('/campeonato', filmes);

    return response.data;
  }
  catch (err) {
    console.log(err)
  }
};

export async function obterFilmes() {
  try {
    const response = await api.get('/filmes');
    const { data } = response;
    data.sort((a, b) => (a.titulo > b.titulo) ? 1 : -1)
    return data;
  }
  catch (err) {
    console.log(err)
  }
};