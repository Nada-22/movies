import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ":MID", component: ViewMovieComponent},
]

@NgModule({
  declarations: [
  
    ViewMovieComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
