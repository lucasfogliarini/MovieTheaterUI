import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html'
})
export class SideBarMenuComponent {
  constructor(public user: User) {    
  }
}
