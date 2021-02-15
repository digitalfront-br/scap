import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate-service.service';

@Component({
  selector: 'df-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(private http: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router)
  }

  public messages = null;
  public disableBtn = false;

  onSubmit(body){
    this.disableBtn = true;
    return this.http.postLogin(body).subscribe(
      success => {
        window.sessionStorage.setItem('token', success['token'])
        this.disableBtn = false;
        return this.router.navigate([''])
      },
      error => {
        this.messages = error.error
        console.log(error),
        this.disableBtn = false;
      },
      () => console.warn('completo')
      
    );
  }

}
