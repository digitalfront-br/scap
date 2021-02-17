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
  
  public id = this.route.snapshot.params.id
  public slug = this.route.snapshot.url[0].path
  public item;
  ngOnInit(): void {
    this.getItem()
  }
  getItem() {
    return this.http.getDetailItem(this.id, this.slug).subscribe(res => {
      console.log(res)
      this.item = res;
    })
  }

}
