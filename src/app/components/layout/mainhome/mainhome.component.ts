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
  imgpath = 'https://image.tmdb.org/t/p/w500';
  constructor(private _moviesservice:MoviesService) { }

  ngOnInit(): void {
    this.getmovies();
    // this.getmoviesimg();
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
        console.log(res.results);
        this.movies = res.results;
        
      }, (error: any) => {
        console.log(error)
      }
      
)
  }
//   getmoviesimg() {
//     this._moviesservice.getimage(9502).subscribe(
//       (res: any) => {
//         console.log(res);
        
//       }, (error: any) => {
//         console.log(error)
//   })
// }
}
