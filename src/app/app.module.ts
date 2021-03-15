import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideBarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieRoomComponent } from './movie-room/movie-room.component';
import { MovieSessionComponent } from './movie-session/movie-session.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SideBarMenuComponent,
    ContentHeaderComponent,
    HomeComponent,
    MovieComponent,
    MovieEditComponent,
    MovieRoomComponent,
    MovieSessionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'movies', component: MovieComponent },
      { path: 'movie/:id',  component: MovieEditComponent },
      { path: 'movie-rooms', component: MovieRoomComponent },
      { path: 'movie-sessions', component: MovieSessionComponent },
    ]),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: 'MOVIE_THEATER_URL', useValue: 'http://localhost:1100/'},
              {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
