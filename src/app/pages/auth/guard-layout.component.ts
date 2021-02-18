import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-guard-layout',
  templateUrl: './guard-layout.component.html',
  styles: [
  ]
})
export class GuardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public mode;

  watchMode() {
    if(window.localStorage.getItem('editMode')) {
      this.mode = true;
    } else {
      this.mode = false;
    }
  }

}
