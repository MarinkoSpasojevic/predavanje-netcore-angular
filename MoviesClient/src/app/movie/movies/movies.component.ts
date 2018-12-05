import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/_interfaces/movie.model';
import { HttpService } from 'src/app/shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  public navigateToCreate = () => {
    this.router.navigate(['/movie/create']);
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

  public redirectToUpdate = (id) => {
    console.log('Redirecting to update page with id: ', id)
    let updateUrl: string = `/movie/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  public redirectToDelete = (event) => {
    console.log('Redirecting to delete page with id: ', event)
    //use Router to navigate to required component
  }
}
