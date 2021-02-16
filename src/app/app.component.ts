import { Component, OnInit} from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'df-root',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Feather.replace();
  }
}
