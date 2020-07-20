using Api.Models;
using Api.Services;
using NUnit.Framework;


namespace FilmesCampeonato.Testes
{
    public class Tests
    {
        private CampeonatoService campeonatoService;

        [SetUp]
        public void Setup()
        {
            campeonatoService = new CampeonatoService();
        }

        [Test]
        public void OrdenarAlfabeticamente()
        {
            var filme1 = new Filme() { Id = "1", Titulo = "Todo mundo em Pânico", Ano = 2016, Nota = 8.5 };
            var filme2 = new Filme() { Id = "2", Titulo = "Annabelle", Ano = 1999, Nota = 8.5 };
            var resultado = campeonatoService.OrdenarAlfabeto(filme1, filme2);
            Assert.AreEqual(resultado, filme2);
        }
    }
}