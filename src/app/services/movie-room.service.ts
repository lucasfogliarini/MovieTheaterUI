import { Injectable } from '@angular/core';
import { MovieTheaterGatewayService } from './movie-theater-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class MovieRoomService {
  constructor(private movieGateway: MovieTheaterGatewayService) { }
  getMovieRooms(){
    return this.movieGateway.get('movierooms');
  }
}
