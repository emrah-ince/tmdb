using Business.Abstract;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private IMovieService _movieService;
        private string _query = string.Empty;

        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet("getbypage")]
        public IActionResult GetByPage(int pageid,string query)
        {

            var result = _movieService.GetbyPage(pageid, query);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);

        }

        [HttpGet("getbyquery")]
        public IActionResult GetByQuerty(string query)
        {

            var result = _movieService.GetbyQuery(query);
            if (result.Success)
            {
                _query = query;
                return Ok(result.Data);
            }

            return BadRequest(result.Message);

        }
    }
}
