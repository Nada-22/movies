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
    return this._httpClient.get(this.url + `/movie/${ movie_id }/similar` + this.api_key);   
  }
  getlatest() {
    return this._httpClient.get(this.url + `/movie/latest` + this.api_key);   

  }
  getoprated() {
    
    return this._httpClient.get(this.url + `/movie/top_rated` + this.api_key);   

  }
  gettrending() {
    
    return this._httpClient.get(this.url + `/trending/all/day` + this.api_key);   

  }
  movietrend() {
    
    return this._httpClient.get(this.url + `/trending/movie/day` + this.api_key);   

  }
  tvtrend() {
    
    return this._httpClient.get(this.url + `/trending/tv/week` + this.api_key);   

  }
  movievedio(movie_id: any) { 
    return this._httpClient.get(this.url + `/movie/${movie_id}/videos` + this.api_key);   
  }
  reviews(movie_id: any) { 
    return this._httpClient.get(this.url + `/movie/${movie_id}/reviews` + this.api_key);   
  }
}
