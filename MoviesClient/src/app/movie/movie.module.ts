import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

import { MoviesComponent } from './movies/movies.component';
import { MovieRoutingModule } from './movie-routing/movie-routing.module';
import { MovieTableComponent } from './movies/movie-table/movie-table.component';
import { ColorAndEmitDirective } from '../shared/color-and-emit.directive';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

@NgModule({
  declarations: [
  MoviesComponent,
  MovieTableComponent,
  ColorAndEmitDirective,
  CreateMovieComponent,
  UpdateMovieComponent
],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
