import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MovieForCreation } from 'src/app/_interfaces/movieForCreation.model';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  public movieForm: FormGroup;

  constructor(private location: Location, private httpService: HttpService) { }

  ngOnInit() {
    this.movieForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      genre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      director: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });
  }

  public createMovie = (movieFormValue) => {
    if (this.movieForm.valid) {
      this.executeMovieCreation(movieFormValue);
    }
  }

  private executeMovieCreation = (movieFormValue) => {
    let movie: MovieForCreation = {
      name: movieFormValue.name,
      genre: movieFormValue.genre,
      director: movieFormValue.director 
    };

    let apiUrl = 'api/movie';
    this.httpService.create(apiUrl, movie)
    .subscribe(res => {
      this.location.back();
      //modal or something in here to inform user about successfull action
    },
    error => {
      console.log("Error while creating movie ", error);
    })
  }

  public redirectToMovieList = () => {
    this.location.back();
    //this.router.navigate(['/movie/list']); it could be done this way as well if using Router
  }

  public isInvalid = (controlName: string) => {
    let control = this.movieForm.controls[controlName];
    return control.invalid && control.touched;
  }
 
  public hasError = (controlName: string, errorName: string) => {
    return this.movieForm.controls[controlName].hasError(errorName);
  }

}
