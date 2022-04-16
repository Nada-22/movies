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
  similarmovie: any;
  imgpath = 'https://image.tmdb.org/t/p/w500';

  constructor(private _activatedRoute: ActivatedRoute , private _Moviesservices:MoviesService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.movie_id = params.get('MID');
    //  alert(this.movie_id)
      this.getmoviedetails();
      this.getmovierecommendations(this.movie_id);
    });
    
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
  getmovierecommendations(id:any) {
    this._Moviesservices.getrecommendations(id).subscribe(
      (res: any) => {
        // console.log(res);
        this.similarmovie = res;
        console.log(this.similarmovie);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
}
