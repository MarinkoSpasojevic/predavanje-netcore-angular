import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { Movie } from 'src/app/_interfaces/movie.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  public movie: Movie;
  public movieForm: FormGroup;

  constructor(private httpService: HttpService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //formGroup initialization with empty FormControls
    this.getMovieById();
  }

  private getMovieById = () => {
    let ownerId: string = this.activeRoute.snapshot.params['id'];
    let movieByIdUrl: string = `api/movie/${ownerId}`;

    this.httpService.getData(movieByIdUrl)
    .subscribe(res => {
      this.movie = res as Movie;
      this.movieForm.patchValue(this.movie);
    },
    (error) => {
      //...
    })
  }

}
