import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from '../movies/movies.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: MoviesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }
