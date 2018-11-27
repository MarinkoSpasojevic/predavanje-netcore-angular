﻿using Movies_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies_Server.Extensions
{
    public static class MovieExtensions
    {
        public static void Map(this Movie dbMovie, Movie movie)
        {
            dbMovie.Name = movie.Name;
            dbMovie.Genre = movie.Genre;
            dbMovie.Director = movie.Director;
        }
    }
}
