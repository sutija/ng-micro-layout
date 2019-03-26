import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class CardService {
  private isCollapsed = false;
  private canCollapse = true;
  readonly isCollapsed$: Subject<boolean> = new Subject();
  readonly canCollapse$: Subject<boolean> = new Subject();

  constructor() { }

  setCanCollapse(canCollapse: boolean) {
    this.canCollapse = canCollapse;
    this.canCollapse$.next(this.canCollapse);
  }

  setIsCollapsed(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
    this.isCollapsed$.next(this.isCollapsed);
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsed$.next(this.isCollapsed);
  }
}
