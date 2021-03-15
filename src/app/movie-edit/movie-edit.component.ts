import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent {
  public movie: Movie;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService,
            private router: Router,
            private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      var id = +params['id'];
      http.get<Movie>(baseUrl + 'movies/'+ id).subscribe(movie => {
        this.movie = movie;
      }, errorResponse => this.toastr.error(errorResponse.error));
    });
  }

  update(){
    this.http.put<Movie>(this.baseUrl + 'movies/'+ this.movie.id, this.movie).subscribe(changes => {
      this.toastr.success('Movie successfully updated.');
      this.router.navigateByUrl('/movies');
    }, errorResponse => this.toastr.error(errorResponse.error));
  }
}
