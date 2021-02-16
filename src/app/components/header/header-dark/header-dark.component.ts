import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'df-header-dark',
  templateUrl: './header-dark.component.html',
  styles: [
  ]
})
export class HeaderDarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Feather.replace();
  }

}
