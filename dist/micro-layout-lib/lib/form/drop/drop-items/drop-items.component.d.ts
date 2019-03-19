import { OnInit } from '@angular/core';
import { DropItem } from '../drop';
import { DropService } from '../drop.service';
export declare class DropItemsComponent implements OnInit {
    private dropService;
    parentId: any;
    isOpened: boolean;
    childrenVisible: any[];
    constructor(dropService: DropService);
    ngOnInit(): void;
    getItems(): DropItem[];
    hasChildren(parentId: any): boolean;
    selectItem(item: DropItem): void;
    toggleChildren(index: any): void;
}
