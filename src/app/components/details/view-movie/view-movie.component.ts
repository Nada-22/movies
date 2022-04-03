import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {
  movie_id: any;
  movie: any;
  imgpath = 'https://image.tmdb.org/t/p/w500';

  constructor(private _activatedRoute: ActivatedRoute , private _Moviesservices:MoviesService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.movie_id = params.get('MID');
    //  alert(this.movie_id)
      this.getmoviedetails();
    });
    // this.getmovierecommendations();
    
  }

  getmoviedetails() {
    this._Moviesservices.getdetails(this.movie_id).subscribe(
      (res: any) => {
        // console.log(res);
        this.movie = res;
        console.log(this.movie);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
    
  }
  getmovierecommendations() {
    this._Moviesservices.getrecommendations(this.movie_id).subscribe(
      (res: any) => {
        // console.log(res);
        this.movie = res;
        console.log(this.movie);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
}
