import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRoom } from '../models/movie-room.model';

@Component({
  selector: 'app-movie-room',
  templateUrl: './movie-room.component.html'
})
export class MovieRoomComponent {
  public movieRooms: MovieRoom[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<MovieRoom[]>(baseUrl + 'movierooms').subscribe(result => {
      this.movieRooms = result;
    }, error => console.error(error));
  }
}
