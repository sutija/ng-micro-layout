import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-card, [ml-card]',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  isColapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
