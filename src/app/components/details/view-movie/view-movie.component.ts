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
             
  first: any;
  movievedio: string = '';
  vediopath = 'https://www.youtube.com/embed/';
  reviews: any[]=[];
  constructor(private _activatedRoute: ActivatedRoute , private _Moviesservices:MoviesService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.movie_id = params.get('MID');
    //  alert(this.movie_id)
      this.getmoviedetails();
      this.getmovierecommendations(this.movie_id);
      this.getmovievedio(this.movie_id);
      this.getmoviereviews(this.movie_id);
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
        this.similarmovie = res.results;
        this.first = this.similarmovie[17];
        console.log(this.similarmovie);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
  getmovievedio(id: any) { 
    this._Moviesservices.movievedio(id).subscribe(
      (res: any) => {
        // console.log(res);
        this.movievedio = res.results[0].key;
        $('#myframe').attr("src", this.vediopath+this.movievedio);
        console.log(this.movievedio);
        
      }, (err: any) => {
        console.log(err);
        
      }
    )
  }
  getmoviereviews(id: any) { 
    this._Moviesservices.reviews(id).subscribe(
      (res: any) => {
        // console.log(res);
        // this.reviews = res.results;
        for(let i=0;i<res.results.length;i++){
          if(i<4){
            this.reviews.push(res.results[i]);
           }
        }
        console.log(this.reviews);
        
      }, (err: any) => {
        console.log(err);
        
      }
)
  }
}
