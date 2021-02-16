import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate-service.service';
import { Component, OnInit } from '@angular/core';
import UIkit from 'uikit'

@Component({
  selector: 'df-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styles: [
  ]
})
export class ForgotPasswordPageComponent implements OnInit {

  constructor(private http: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }
  public messages = null;
  public disableBtn = false;

  infoDanger(msg){
    UIkit.notification({
      message: `<div class="uk-text-center">
      ${ msg['email'] ? '<span>'+msg['email']+'</span><br>' : '' }
      </div>`,
      status: 'danger',
      pos: 'top-center',
      timeout: 5000
    });
}
infoSuccess(msg){
  UIkit.notification({
    message: `<div class="uk-text-center"><span>${msg}</span></div>`,
    status: 'success',
    pos: 'top-center',
    timeout: 5000
  });
}
  onSubmit(body){
    this.disableBtn = true;
    return this.http.postForgotPassword(body).subscribe(
      success => {
        this.infoSuccess('Por favor, verifique seu email')
        console.log(success);
        this.disableBtn = false;
        return this.router.navigate(['/login'])
      },
      error => {
        this.infoDanger(error.error),
        this.disableBtn = false;
      }
      
    );
  }

}
