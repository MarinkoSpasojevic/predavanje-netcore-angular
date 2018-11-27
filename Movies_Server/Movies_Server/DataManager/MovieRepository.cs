using Movies_Server.Context;
using Movies_Server.Extensions;
using Movies_Server.Interfaces;
using Movies_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Movies_Server.DataManager
{
    public class MovieRepository: IMovieRepository
    {
        private readonly MovieContext _context;

        public MovieRepository(MovieContext context)
        {
            _context = context;
        }

        public List<Movie> GetMovies() => _context.Movies.ToList();

        public Movie GetMovieById(Guid id) => _context.Movies.SingleOrDefault(m => m.Id.Equals(id));

        public void SaveMovie(Movie movie)
        {
            movie.Id = Guid.NewGuid();
            _context.Add(movie);
            _context.SaveChanges();
        }

        public void UpdateMovie(Movie dbMovie, Movie movie)
        {
            dbMovie.Map(movie);
            _context.Update(dbMovie);
            _context.SaveChanges();
        }

        public void DeleteMovie(Movie movie)
        {
            _context.Remove(movie);
            _context.SaveChanges();
        }
    }
}
