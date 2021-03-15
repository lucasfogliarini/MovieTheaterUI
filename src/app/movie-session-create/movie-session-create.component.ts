import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MovieSession } from '../models/movie-session.model';
import { MotionGraphics } from '../models/motion-graphics.enum';
import { MovieAudio } from '../models/movie-audio.enum';

@Component({
  selector: 'app-movie-session-create',
  templateUrl: './movie-session-create.component.html'
})
export class MovieSessionCreateComponent {
  public session: MovieSession;
  public presentationRange: any;
  public motionGraphics: any;
  public movieAudios: any;

  constructor(private http: HttpClient, 
            @Inject('MOVIE_THEATER_URL') private baseUrl: string,
            private toastr: ToastrService,
            private router: Router) {
              this.session = new MovieSession();
              this.motionGraphics = this.GetSelectOptions(MotionGraphics);
              this.movieAudios = this.GetSelectOptions(MovieAudio);
  }

  create(){
    this.session.presentationStart = new Date(this.presentationRange[0]);
    this.session.presentationEnd = new Date(this.presentationRange[1]);
    this.http.post<MovieSession>(this.baseUrl + 'moviesessions', this.session).subscribe(changes => {
      this.toastr.success('Session successfully created.');
      this.router.navigateByUrl('/movie-sessions');
    }, errorResponse => this.toastr.error(errorResponse.error));
  }

  GetSelectOptions(enumerator: any){
    var selectOptions = Object.keys(enumerator).filter(Number).map(value => ({ value: value, text: enumerator[value] }));
    return selectOptions;
  }
}
