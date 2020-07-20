using System.Collections.Generic;
using System.Linq;
using Api.Models;

namespace Api.Services
{
    public class CampeonatoService

    {
        public CampeonatoService()
        {

        }

        public  List<Filme> IniciarPartida(List<Filme> filmes)
        {
            var semiFinalistas = PrimeiraPartida(filmes);
            var finalistas = SegundaPartida(semiFinalistas);

            return UltimaPartida(finalistas);
        }

        public List<Filme> PrimeiraPartida(List<Filme> filmes)
        {
            var vencedoresPrimeiraFase = new List<Filme>();
            for(int i = 0; i < filmes.Count / 2; i++)
            {
                var filme1 = filmes[i];
                var filme2 = filmes[filmes.Count - i - 1];
                vencedoresPrimeiraFase.Add(CompararNotas(filme1, filme2));
            }
            return vencedoresPrimeiraFase;
        }

        public List<Filme> SegundaPartida(List<Filme> filmes)
        {
            var finalistas = new List<Filme>();
            var rodadas = 2;
                for (int i = 0; i <= filmes.Count / rodadas; i = i+2)
                {
                    var filme1 = filmes[i];
                    var filme2 = filmes[i +1];
                    finalistas.Add(CompararNotas(filme1, filme2));
                }
            return finalistas;
        }

        public List<Filme> UltimaPartida(List<Filme> filmes)
        {
            var vencedor = CompararNotas(filmes[0], filmes[1]);
            var viceCampeao = filmes.Where(filme => filme != vencedor).FirstOrDefault();
            var resultadoFinal = new List<Filme> { vencedor, viceCampeao };

            return resultadoFinal;
        }

        public Filme OrdenarAlfabeto(Filme filme1, Filme filme2)
        {
            var listarOrdemAlfabetica = new List<Filme> { filme1, filme2 };
            IEnumerable<Filme> resultado = listarOrdemAlfabetica.OrderBy(filme => filme.Titulo);

            return resultado.First();
        }

        public Filme CompararNotas(Filme filme1, Filme filme2)
        {
            if (filme1.Nota > filme2.Nota)
            {
                return filme1;
            }
            else if (filme2.Nota > filme1.Nota)
            {
                return filme2;
            } else {
                return OrdenarAlfabeto(filme1, filme2);
            }
        }
    }
}
