import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent {
  public movie: Movie;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService) {
    http.get<Movie>(baseUrl + 'movies/'+ 1).subscribe(movie => {
      this.movie = movie;
    }, errorResponse => this.toastr.error(errorResponse.error));
  }

  edit(){
    console.log(this.movie);
  }
}
