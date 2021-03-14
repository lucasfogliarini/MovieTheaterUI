import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  public movies: Movie[];

  constructor(http: HttpClient, @Inject('MOVIE_THEATER_URL') baseUrl: string) {
    if(false){
      http.get<Movie[]>(baseUrl + 'movies').subscribe(result => {
        this.movies = result;
      }, error => console.error(error));
    }
    this.movies = [ { Id:1, Title: "Movie 1", Description: "Description1", Duration: 1, Banner: "Banner1" }];
  }
}
