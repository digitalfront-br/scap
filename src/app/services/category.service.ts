import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private token = JSON.parse(window.sessionStorage.getItem('user'));

  public url = "https://apiscap.dfront.ml/api/auth/";
  public headers = { 'content-type': 'application/json', 'Authorization': this.token.user.token };

  getCategories(){
    return this.http.get(this.url+'categories', { headers: this.headers})
  }
}
