import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieSession } from '../models/movie-session.model';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html'
})
export class MovieSessionComponent {
  public sessions: MovieSession[];

  constructor(http: HttpClient, @Inject('MOVIE_THEATER_URL') baseUrl: string) {
    http.get<MovieSession[]>(baseUrl + 'moviesessions').subscribe(result => {
      this.sessions = result;
    }, error => console.error(error));
  }
}
