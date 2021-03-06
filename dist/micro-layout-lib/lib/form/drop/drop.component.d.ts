import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DropService } from './drop.service';
import { DropItem } from './drop';
import { ControlValueAccessor, FormControl } from '@angular/forms';
export declare class DropComponent extends FormControl implements OnInit, OnChanges, ControlValueAccessor {
    private dropService;
    disabledIds: Array<number>;
    items: Array<DropItem>;
    value: number;
    editable: boolean;
    update: EventEmitter<DropItem>;
    delete: EventEmitter<DropItem>;
    add: EventEmitter<DropItem>;
    select: EventEmitter<DropItem>;
    dropVisible: boolean;
    dropButtonStyles: string[];
    foundItems: Array<DropItem>;
    onChange: any;
    path: Array<DropItem>;
    searchText: string;
    searchActive: boolean;
    selectedItem: DropItem;
    constructor(dropService: DropService);
    ngOnInit(): void;
    activateSearch(): void;
    selectItem(selectedItem: DropItem): void;
    ngOnChanges(changes: SimpleChanges): void;
    dropToggle(event: any): void;
    writeValue(obj: number): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: any): void;
    onKeyUp(event: KeyboardEvent): void;
}
