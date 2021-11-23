using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }


        //[HttpGet]
        //public IActionResult Get()
        //{
        //    string json = string.Empty;
        //    using (WebClient webClient = new WebClient())
        //    {
        //        json = webClient.DownloadString("https://api.themoviedb.org/3/movie/popular?api_key=5abd992f12f33b0d0efb1dd649141f3c&language=en-US&page=1");
        //    }

        //    var popularMovies = JsonConvert.DeserializeObject<BaseJsonMovieResponse<PopularMovie>>(json);

        //    return Ok(popularMovies);
        //}
    }
}
