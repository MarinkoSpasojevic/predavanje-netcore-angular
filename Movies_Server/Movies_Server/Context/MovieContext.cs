using Microsoft.EntityFrameworkCore;
using Movies_Server.Models;
using System;

namespace Movies_Server.Context
{
    public class MovieContext: DbContext
    {
        public MovieContext(DbContextOptions options)
            :base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie>().HasData(
                new Movie
                {
                   Id = Guid.NewGuid(),
                   Name = "Alien: Covenant",
                   Genre = "Sci-Fi, Thriller",
                   Director = "Ridley Scott"

                }, 
                new Movie
                {
                    Id = Guid.NewGuid(),
                    Name = "The Lord Of The Rings",
                    Genre = "Adventure, Drama, Fantasy",
                    Director = "Peter Jackson"
                },
                new Movie
                {
                    Id = Guid.NewGuid(),
                    Name = "Original Sin",
                    Genre = " Drama, Mystery, Romance",
                    Director = "Michael Cristofer"
                },
                new Movie
                {
                    Id = Guid.NewGuid(),
                    Name = "World War Z",
                    Genre = " Action, Adventure, Horror",
                    Director = " Marc Forster"
                });
        }
    }
}
