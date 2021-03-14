import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRoom } from '../models/movie-room.model';

@Component({
  selector: 'app-movie-room',
  templateUrl: './movie-room.component.html'
})
export class MovieRoomComponent {
  public rooms: MovieRoom[];

  constructor(http: HttpClient, @Inject('MOVIE_THEATER_URL') baseUrl: string) {
    http.get<MovieRoom[]>(baseUrl + 'movierooms').subscribe(result => {
      this.rooms = result;
    }, error => console.error(error));      
  }
}
