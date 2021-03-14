import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MovieRoomService } from './services/movie-room.service';
import { MovieTheaterGatewayService } from './services/movie-theater-gateway.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MovieRoomService, MovieTheaterGatewayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
