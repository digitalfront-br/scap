import { DetailService } from './../../services/detail.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'df-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  constructor(public http: DetailService,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getItem();
    this.checkStatus();
  }

  public id = this.route.snapshot.params.id
  public slug = this.route.snapshot.url[0].path
  public item;

  public mode;

  checkStatus() {
    if(window.localStorage.getItem('editMode')) {
      this.mode = true;
    } else {
      this.mode = false;
    }
  }
  getItem() {
    return this.http.getDetailItem(this.id, this.slug).subscribe(res => {
      console.log(res)
      this.item = res;
    })
  }

}
