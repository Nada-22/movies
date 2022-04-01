import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient: HttpClient) { }
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=30fb16950924decb11dcbb85acaa8480&query=Ponyo&year=2008';
  public get() {  return this._httpClient.get(this.url);  }
}
