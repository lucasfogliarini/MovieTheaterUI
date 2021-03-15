import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MovieSession } from '../models/movie-session.model';

@Component({
  selector: 'app-movie-session-create',
  templateUrl: './movie-session-create.component.html'
})
export class MovieSessionCreateComponent {
  public session: MovieSession;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService,
            private router: Router) {
              this.session = new MovieSession();
  }

  create(){
    this.http.post<MovieSession>(this.baseUrl + 'moviesessions', this.session).subscribe(changes => {
      this.toastr.success('Session successfully created.');
      this.router.navigateByUrl('/movie-sessions');
    }, errorResponse => this.toastr.error(errorResponse.error));
  }
}
