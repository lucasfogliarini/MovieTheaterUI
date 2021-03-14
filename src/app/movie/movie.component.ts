import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  public movies: Movie[];

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService) {
    http.get<Movie[]>(baseUrl + 'movies').subscribe(result => {
      this.movies = result;
    }, errorResponse => this.toastr.error(errorResponse.error));
  }

  delete(movieId: number){
    var delResource = `${this.baseUrl}movies/${movieId}`;
    this.http.delete<number>(delResource).subscribe(result => {
      this.toastr.success('Movie successfully deleted.');
    }, errorResponse => this.toastr.error(errorResponse.error));
  }
}
