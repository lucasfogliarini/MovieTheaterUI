import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideBarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MovieRoomComponent } from './movie-room/movie-room.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SideBarMenuComponent,
    HomeComponent,
    MovieRoomComponent,
    ContentHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'movie-rooms', component: MovieRoomComponent },
    ])
  ],
  providers: [{provide: 'MOVIE_THEATER_URL', useValue: 'http://localhost:8080/'},
              {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
