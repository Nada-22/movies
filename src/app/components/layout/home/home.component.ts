import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _moviesservice:MoviesService) { }

  ngOnInit(): void {
    this._moviesservice.get().subscribe(
      (res: any) => {
        console.log(res);
        
      }, (error: any) => {
        console.log(error)
  }
)
  }

}
