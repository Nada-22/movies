import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {
  movies: any[] = [];
  first!: any;
  trenddingmovies: any;
  topratedmovies: any;
  imgpath = 'https://image.tmdb.org/t/p/w500';
  constructor(private _moviesservice:MoviesService) { }

  ngOnInit(): void {
    this.getmovies();
    this.getoprated();
    this.gettrendding();
    // this.getlatestmovies();
    $(document).ready(function(){

      // $('#itemslider').carousel({ interval: 3000 });
      
      $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);
      
      for (var i=1;i<6;i++) {
      itemToClone = itemToClone.next();
      
      if (!itemToClone.length) {
      itemToClone = $(this).siblings(':first');
      }
      
      itemToClone.children(':first-child').clone()
      .addClass("cloneditem-"+(i))
      .appendTo($(this));
      }
      });
      });
      
  }
  getmovies() {
    this._moviesservice.get().subscribe(
      (res: any) => {
        // console.log(res.results);
        this.movies = res.results;
        this.first = this.movies[12]
        // console.log(this.first);
        
      }, (error: any) => {
        console.log(error)
      }
      
)
  }
//   getlatestmovies() {
//     this._moviesservice.getlatest().subscribe(
//       (res: any) => {
//         console.log(res);
        
//       }, (error: any) => {
//         console.log(error)
//   })
// }
  
    getoprated() {
    this._moviesservice.getoprated().subscribe(
      (res: any) => {
        this.topratedmovies = res.results;
        console.log(this.topratedmovies);
      }, (error: any) => {
        console.log(error)
  })
    }
    gettrendding() {
      this._moviesservice.gettrending().subscribe(
        (res: any) => {
          this.trenddingmovies = res.results;
          console.log(this.trenddingmovies);          
        }, (error: any) => {
          console.log(error)
    })
  }
}
