using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmeController : ControllerBase
    {

     private readonly FilmeService filmeService;
     private readonly CampeonatoService campeonatoService;

        public FilmeController(FilmeService filmeService, CampeonatoService campeonatoService)
        {
            this.filmeService = filmeService;
            this.campeonatoService = campeonatoService;

        }

        [HttpPost]
        [Route("api/campeonato")]
        public ActionResult PostFilmes(List<Filme> filmes)
        {
            if (filmes.Count < 8)
            {
                return BadRequest("O número máximo de filmes é 8");
            }
            return Ok(campeonatoService.IniciarPartida(filmes));
        }

        [HttpGet]
        [Route("api/filmes")]
        public async Task<List<Filme>> GetFilmes()
        {

            return await filmeService.ObterFilmes();
        }

    }
}
