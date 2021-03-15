import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieSession } from '../models/movie-session.model';
import { MotionGraphics } from '../models/motion-graphics.enum';
import { MovieAudio } from '../models/movie-audio.enum';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html'
})
export class MovieSessionComponent {
  sessions: MovieSession[];
  motionGraphic = MotionGraphics;
  movieAudio = MovieAudio;
  currentPage: number;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService,
            private router: Router,
            private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(queryParams => {
        this.currentPage = +queryParams['page'];
        this.currentPage = this.currentPage || 1;
        var skip = (this.currentPage - 1)  * 10;
        var sessionsUri = `${this.baseUrl}moviesessions?skip=${skip}`;
        http.get<MovieSession[]>(sessionsUri).subscribe(result => {
          this.sessions = result;
        }, errorResponse => this.toastr.error(errorResponse.message));
    });
  }

  delete(sessionId: number){
    var delResource = `${this.baseUrl}moviesessions/${sessionId}`;
    this.http.delete<number>(delResource).subscribe(result => {
      this.toastr.success('Session successfully deleted.');
      this.router.navigateByUrl('/movie-sessions?deletedId=' + sessionId);
    }, errorResponse => this.toastr.error(errorResponse.error));
  }
}
