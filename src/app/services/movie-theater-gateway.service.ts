import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieTheaterGatewayService {
  readonly MOVIE_THEATER_URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  get(resource: string){
    this.http.get(`${this.MOVIE_THEATER_URL}${resource}`);
  }
}
