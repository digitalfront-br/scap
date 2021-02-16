import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate-service.service';
import UIkit from 'uikit';

@Component({
  selector: 'df-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(private http: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }

  public messages = null;
  public disableBtn = false;

  infoDanger(msg){
      UIkit.notification({
        message: `<div class="uk-text-center">
        ${ msg['email'] ? '<span>'+msg['email']+'</span><br>' : '' }
        ${ msg['password'] ? '<span>'+msg['password']+'</span>' : '' }
        </div>`,
        status: 'danger',
        pos: 'top-center',
        timeout: 5000
      });
  }
  infoSuccess(msg){
    UIkit.notification({
      message: `<div class="uk-text-center"><span>Olá ${msg.user.name}</span></div>`,
      status: 'success',
      pos: 'top-center',
      timeout: 5000
    });
}

  onSubmit(body){
    this.disableBtn = true;
    return this.http.postLogin(body).subscribe(
      success => {
        const user: object = success;
        window.sessionStorage.setItem('user', JSON.stringify(user))
        this.disableBtn = false;
        this.infoSuccess(user)
        return this.router.navigate(['/'])
      },
      error => {
        this.messages = error.error
        this.infoDanger(error.error)
        this.disableBtn = false
      }
      
    );
  }

}
