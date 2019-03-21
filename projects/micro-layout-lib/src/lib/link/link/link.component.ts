import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LinkType} from './link';

@Component({
  selector: 'ml-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() title: string;
  @Input() target: string;
  @Input() type: LinkType;

  constructor(private router: Router) { }

  onClick() {
    if (this.type === 'internal') {
      this.router.navigateByUrl(this.target);
    } else {
      window.location.href = this.target;
    }
  }
}
