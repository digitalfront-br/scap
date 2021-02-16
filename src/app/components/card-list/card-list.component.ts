import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'df-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent implements OnInit {

  @Input() array: Array<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
