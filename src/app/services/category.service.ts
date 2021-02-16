import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private token = JSON.parse(window.sessionStorage.getItem('user'));

  public url = "https://apiscap.dfront.ml/api/";
  public headers = { 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.token.user.token };

  getCategories(pages = 5){
    return this.http.get(this.url+'categories?perPage='+pages, { headers: this.headers})
  }
  getAllCategories(){
    return this.http.get(this.url+'categories', { headers: this.headers})
  }
}
