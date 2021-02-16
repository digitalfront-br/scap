import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  private token = JSON.parse(window.sessionStorage.getItem('user'));

  public url = "https://apiscap.dfront.ml/api/";
  public headers = { 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.token.user.token };

  getQuestions(pages){
    return this.http.get(this.url+'questions?perPage='+pages, { headers: this.headers})
  }
  getAllQuestions(){
    return this.http.get(this.url+'questions', { headers: this.headers})
  }
}
