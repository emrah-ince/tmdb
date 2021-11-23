using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PopularMovieController : ControllerBase
    {
        private IPopularMovieService _popularMovieService;

        public PopularMovieController(IPopularMovieService popularMovieService)
        {
            _popularMovieService = popularMovieService;
        }

        [HttpGet("getbypage")]
        public IActionResult GetByPage(int pageid) //https://localhost:44306/api/popularmovie/getbypage?pageid=2
        {

            var result = _popularMovieService.GetbyPage(pageid);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);

        }

        [HttpGet("getbyquery")]
        public IActionResult GetByQuerty(string query) //https://localhost:44306/api/popularmovie/getbyquery?query
        {
            
            var result = _popularMovieService.GetbyQuery(query);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);

        }

    }
}
