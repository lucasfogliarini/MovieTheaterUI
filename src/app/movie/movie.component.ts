import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  movies: Movie[];
  currentPage: number;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService,
            private router: Router,
            private activeRoute: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.currentPage = +queryParams['page'];
      this.currentPage = this.currentPage || 1;
      var skip = (this.currentPage - 1)  * 10;
      var moviesUri = `${this.baseUrl}movies?skip=${skip}`;
      http.get<Movie[]>(moviesUri).subscribe(result => {
        this.movies = result;
      }, errorResponse => this.toastr.error(errorResponse.message));
    });
  }

  delete(movieId: number){
    var delResource = `${this.baseUrl}movies/${movieId}`;
    this.http.delete<number>(delResource).subscribe(result => {
      this.toastr.success('Movie successfully deleted.');
      this.router.navigateByUrl('/movies?deletedId='+movieId);
    }, errorResponse => this.toastr.error(errorResponse.error));
  }
}
