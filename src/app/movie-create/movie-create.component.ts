import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html'
})
export class MovieCreateComponent {
  public movie: Movie;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService,
            private router: Router) {
              this.movie = new Movie();
  }

  create(){
    this.http.post<Movie>(this.baseUrl + 'movies', this.movie).subscribe(changes => {
      this.toastr.success('Movie successfully created.');
      this.router.navigateByUrl('/movies');
    }, errorResponse => this.toastr.error(errorResponse.error));
  }
}
