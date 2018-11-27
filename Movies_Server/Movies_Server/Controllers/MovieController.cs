using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movies_Server.Interfaces;
using Movies_Server.Models;

namespace Movies_Server.Controllers
{
    [Route("api/movie")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieRepository _movieRepo;

        public MovieController(IMovieRepository movieRepo)
        {
            _movieRepo = movieRepo;
        }

        [HttpGet]
        public IActionResult GetMovies()
        {
            try
            {
                var movies = _movieRepo.GetMovies();
                return Ok(movies);
            }
            catch (Exception ex)
            {
                //logovanje greske
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpGet("{id}", Name = "MovieById")]
        public IActionResult GetMovie(Guid id)
        {
            try
            {
                var movie = _movieRepo.GetMovieById(id);
                if(movie == null)
                {
                    return NotFound();
                }

                return Ok(movie);
            }
            catch (Exception ex)
            {
                //logovanje greske
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            try
            {
                if (movie == null)
                {
                    return BadRequest("Movie object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                _movieRepo.SaveMovie(movie);

                return CreatedAtRoute("MovieById", new { id = movie.Id }, movie);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, [FromBody]Movie movie)
        {
            try
            {
                if (movie == null)
                {
                    return BadRequest("Movie object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                var dbMovie = _movieRepo.GetMovieById(id);
                if (dbMovie == null)
                {
                    return NotFound();
                }

                _movieRepo.UpdateMovie(dbMovie, movie);

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                var movie = _movieRepo.GetMovieById(id);
                if (movie == null)
                {
                    return NotFound();
                }

                _movieRepo.DeleteMovie(movie);

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}