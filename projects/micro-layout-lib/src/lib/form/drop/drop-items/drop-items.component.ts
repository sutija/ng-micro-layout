import {Component, Input, OnInit} from '@angular/core';
import {DropItem} from '../drop';
import {DropService} from '../drop.service';
import { DropComponent } from '../drop.component';

@Component({
  selector: 'ml-drop-items, [ml-drop-items]',
  templateUrl: './drop-items.component.html',
})
export class DropItemsComponent implements OnInit {
  @Input() parentId;
  @Input() isOpened = true;
  childrenVisible = [];

  constructor(private dropService: DropService) { }

  ngOnInit() {
    this.childrenVisible = this.dropService.getItemsByParentId(this.parentId).map(() => false);
  }

  getItems() {
    return this.dropService.getItemsByParentId(this.parentId);
  }

  hasChildren(parentId) {
    return this.dropService.getItemsByParentId(parentId).length > 0;
  }

  selectItem(item: DropItem) {
    this.dropService.selectItem(item);
  }

  toggleChildren(index) {
    this.childrenVisible[index] = !this.childrenVisible[index];
  }

}
