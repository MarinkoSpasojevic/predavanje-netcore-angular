import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/_interfaces/movie.model';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getMovies();
  }

  public getMovies = () => {
    let route: string = 'api/movie';
    this.httpService.getData(route)
    .subscribe((result) => {
      this.movies = result as Movie[];
    },
    (error) => {
      console.error(error);
    });
  }

  public redirectToUpdate = (event) => {
    console.log('Redirecting to update page with id: ', event)
    //use Router to navigate to required component
  }

  public redirectToDelete = (event) => {
    console.log('Redirecting to delete page with id: ', event)
    //use Router to navigate to required component
  }
}
