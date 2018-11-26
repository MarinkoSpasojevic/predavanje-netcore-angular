using Movies_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies_Server.Interfaces
{
    public interface IMovieRepository
    {
        List<Movie> GetMovies();
        Movie GetMovieById(Guid id);
        void SaveMovie(Movie movie);
        void UpdateMovie(Movie movie);
        void DeleteMovie(Movie movie);
    }
}
