import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ml-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() title: string;
  @Input() target: string;

  constructor(private router: Router) { }

  onClick() {
    this.router.navigateByUrl(this.target);
  }
}
