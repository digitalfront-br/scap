import { Component } from '@angular/core';

@Component({
  selector: 'df-root',
  template: `
  <h1>Angular</h1>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'scap';
}
