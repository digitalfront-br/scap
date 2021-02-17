import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'df-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent implements OnInit {

  @Input() data: Array<any>;
  @Input() linkMore: string;
  @Input() prefixUrl: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
