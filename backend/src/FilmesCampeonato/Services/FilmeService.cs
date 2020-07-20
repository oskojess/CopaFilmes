using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Api.Models;
using Newtonsoft.Json;

namespace Api.Services
{
    public class FilmeService
    {
        public HttpClient Cliente { get; }

        public FilmeService(HttpClient cliente)
        {
            cliente.BaseAddress = new Uri("http://copafilmes.azurewebsites.net/api/filmes");
            cliente.DefaultRequestHeaders.Add("Accept", "application/json");
            cliente.DefaultRequestHeaders.Add("User-Agent","HttpClientFactory-Sample");

            Cliente = cliente;  
        }

        public async Task<List<Filme>> ObterFilmes() 
        {
            var response = await Cliente.GetAsync(Cliente.BaseAddress);
            response.EnsureSuccessStatusCode();
            var responseStream = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<List<Filme>>(responseStream);
        }
    }
}
