import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {

  constructor(private http: HttpClient) {}

  url = "https://apiscap.dfront.ml/api/auth/";

  postLogin(body) {
    return this.http.post(this.url+'login', body).subscribe(res => { console.log(res)});
  }
  postCreateAccount(body) {
    return this.http.post(this.url+'create-account', body).subscribe(res => { console.log(res)});
  }
  postForgotPassword(body) {
    return this.http.post(this.url+'forgot-password', body).subscribe(res => { console.log(res)});
  }
}
