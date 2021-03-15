import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Theater';
    constructor(private router: Router, public user: User) {
        if(!this.user.login){
            this.router.navigateByUrl('/login');
        }
    }
}
