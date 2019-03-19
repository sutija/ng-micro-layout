import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class VirtualGridService {
  private visible = false;
  $visible: Subject<boolean> = new Subject();

  constructor() {
    window.onkeyup = e => {
      if (e.ctrlKey && e.code === 'KeyG') {
        this.visible = !this.visible;
        this.$visible.next(this.visible);
      }
    };
  }
}
