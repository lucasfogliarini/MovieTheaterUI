import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  public movies: Movie[];

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService,
            private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    http.get<Movie[]>(baseUrl + 'movies').subscribe(result => {
      this.movies = result;
    }, errorResponse => this.toastr.error(errorResponse.message));
  }

  delete(movieId: number){
    var delResource = `${this.baseUrl}movies/${movieId}`;
    this.http.delete<number>(delResource).subscribe(result => {
      this.toastr.success('Movie successfully deleted.');
      this.router.navigateByUrl('/movies?'+Math.random());
    }, errorResponse => this.toastr.error(errorResponse.error));
  }
}
