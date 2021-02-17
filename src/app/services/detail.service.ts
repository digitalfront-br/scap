import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  private token = JSON.parse(window.sessionStorage.getItem('user'));
  public urlApi = 'https://apiscap.dfront.ml/api/';
  public headers = { 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.token.user.token };

  getDetailItem(id, prefix):Observable<any> {
    return this.http.get(this.urlApi + prefix + '/'+ id, { headers: this.headers});
  }
}
