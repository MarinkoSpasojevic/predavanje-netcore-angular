using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Movies_Server.Migrations
{
    public partial class Initial_Database_Migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Genre = table.Column<string>(nullable: true),
                    Director = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Director", "Genre", "Name" },
                values: new object[,]
                {
                    { new Guid("12366b4e-3710-4851-9275-37a533710d2e"), "Ridley Scott", "Sci-Fi, Thriller", "Alien: Covenant" },
                    { new Guid("83a879ce-d6e6-4ff4-8a47-496226ae51bd"), "Peter Jackson", "Adventure, Drama, Fantasy", "The Lord Of The Rings" },
                    { new Guid("a831e1b9-555f-49e1-a226-fd81b6527f06"), "Michael Cristofer", " Drama, Mystery, Romance", "Original Sin" },
                    { new Guid("aec1fb29-dfc7-49d6-80b6-f00c8fb0cbe8"), " Marc Forster", " Action, Adventure, Horror", "World War Z" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
