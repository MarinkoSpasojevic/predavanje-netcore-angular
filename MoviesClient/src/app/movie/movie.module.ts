import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieRoutingModule } from './movie-routing/movie-routing.module';
import { MovieTableComponent } from './movies/movie-table/movie-table.component';
import { ColorAndEmitDirective } from '../shared/color-and-emit.directive';

@NgModule({
  declarations: [
  MoviesComponent,
  MovieTableComponent,
  ColorAndEmitDirective
],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
