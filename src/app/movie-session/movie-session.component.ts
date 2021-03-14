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
    if(false){
      http.get<MovieSession[]>(baseUrl + 'movie-sessions').subscribe(result => {
        this.sessions = result;
      }, error => console.error(error));
    }
    this.sessions = [ { Id:1, Audio: 1, MotionGraphics: 2, PresentationStart: new Date, PresentationEnd: new Date, TicketPrice: 1 }];
  }
}
