import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieSession } from '../models/movie-session.model';
import { MotionGraphics } from '../models/motion-graphics.enum';
import { MovieAudio } from '../models/movie-audio.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html'
})
export class MovieSessionComponent {
  public sessions: MovieSession[];
  motionGraphic = MotionGraphics;
  movieAudio = MovieAudio;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService) {
    http.get<MovieSession[]>(baseUrl + 'moviesessions').subscribe(result => {
      this.sessions = result;
    }, error => console.error(error));
  }

  delete(sessionId: number){
    var delResource = `${this.baseUrl}moviesessions/${sessionId}`;
    this.http.delete<number>(delResource).subscribe(result => {
      this.toastr.success('Session successfully deleted.');
    }, error => console.error(error));
  }
}
