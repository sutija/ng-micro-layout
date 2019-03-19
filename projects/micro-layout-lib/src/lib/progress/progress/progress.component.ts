import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ml-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {
  @Input() progressPercent = 0;
  @Input() progressText: string;

  constructor() { }

  ngOnInit() {
  }
}
