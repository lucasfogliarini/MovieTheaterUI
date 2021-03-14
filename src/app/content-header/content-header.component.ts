import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent {
  @Input()
  headerTitle: string;
  constructor() { }
}
