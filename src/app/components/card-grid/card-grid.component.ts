import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'df-card-grid',
  templateUrl: './card-grid.component.html',
  styles: [
  ]
})
export class CardGridComponent implements OnInit {

  @Input() data: Array<any>;
  @Input() linkMore: string;
  @Input() prefixUrl: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
