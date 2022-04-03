import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient: HttpClient) { }
  private url = 'https://api.themoviedb.org/3';
  private api_key='?api_key=30fb16950924decb11dcbb85acaa8480&query=Ponyo&year=2008'
  public get() { return this._httpClient.get(this.url + '/movie/popular' + this.api_key); }
  
  // public getimage(movie_id:any){return this._httpClient.get(this.url +`/movie/${movie_id}/images`+this.api_key);}
  getdetails(movie_id:any) {
  
    return this._httpClient.get(this.url + `/movie/${movie_id}` + this.api_key);
  }
  getrecommendations(movie_id:any) {
    
    
    return this._httpClient.get(this.url + `/movie/${ movie_id }/recommendations` + this.api_key);

    
  }
}
