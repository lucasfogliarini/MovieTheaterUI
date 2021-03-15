import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user.model';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private router: Router, 
              private toastr: ToastrService,
              public user: User) {
  }

  login(){
    this.toastr.success(this.user.login + ' successfully logged in');
    this.router.navigateByUrl('/');
  }
}
