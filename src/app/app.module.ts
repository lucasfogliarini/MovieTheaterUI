import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { NgSelect2Module } from 'ng-select2';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideBarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { HomeComponent } from './home/home.component';
import { MovieRoomComponent } from './movie-room/movie-room.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieSessionComponent } from './movie-session/movie-session.component';
import { MovieSessionCreateComponent } from './movie-session-create/movie-session-create.component';
import { LoginComponent } from './login/login.component';
import { User } from './models/user.model';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SideBarMenuComponent,
    ContentHeaderComponent,
    HomeComponent,
    LoginComponent,
    MovieRoomComponent,
    MovieComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieSessionComponent,
    MovieSessionCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'movie-rooms', component: MovieRoomComponent },
      { path: 'movies', component: MovieComponent },
      { path: 'movie',  component: MovieCreateComponent },
      { path: 'movie/:id',  component: MovieEditComponent },
      { path: 'movie-sessions', component: MovieSessionComponent },
      { path: 'movie-session', component: MovieSessionCreateComponent },
    ]),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
    BrowserAnimationsModule,
    FormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    NgSelect2Module,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: 'MOVIE_THEATER_URL', useValue: 'http://localhost:1100/'},
              { provide: APP_BASE_HREF, useValue: '/'},
              { provide: OWL_DATE_TIME_LOCALE, useValue: 'pt-BR'},
              { provide: User }],
  bootstrap: [AppComponent]
})
export class AppModule { }
