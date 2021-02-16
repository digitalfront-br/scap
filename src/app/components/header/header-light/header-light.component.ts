import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'df-header-light',
  templateUrl: './header-light.component.html',
  styles: [
  ]
})
export class HeaderLightComponent implements OnInit {

  constructor() { }

  public user;

  ngOnInit(): void {
    this.loadUser();
    Feather.replace();
  }

  loadUser() {
    const u = JSON.parse(window.sessionStorage.getItem('user')) 
    this.user = u.user
  }

  checkout() {
    window.sessionStorage.removeItem('user')
    window.location.reload();
  }

}
