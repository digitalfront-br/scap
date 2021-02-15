import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) {
  }
  public url = "https://apiscap.dfront.ml/api/auth/";
  public headers = { 'content-type': 'application/json'};


  postLogin(body) {
    return this.http.post(this.url+'login', body, {headers: this.headers});
  }
  postCreateAccount(body) {
    return this.http.post(this.url+'create-account', body).subscribe(
      success => console.log('success', success),
      error => console.error(error),
      () => console.warn('completo')
      
    );
  }
  postForgotPassword(body) {
    return this.http.post(this.url+'forgot-password', body).subscribe(res => { console.log(res)});
  }
}
