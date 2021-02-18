import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'df-make-session',
  templateUrl: './make-session.component.html',
  styles: [
  ]
})
export class MakeSessionComponent implements OnInit {

  @Input() show: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
