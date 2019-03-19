import { DropItem } from './drop';
import { Subject } from 'rxjs';
export declare class DropService {
    private items;
    private selectedItem;
    protected disabledIds: Array<number>;
    readonly selectedItem$: Subject<DropItem>;
    constructor();
    getItemsByParentId(id: number): DropItem[];
    getItemById(id: number): DropItem;
    setDisabledIds(ids: Array<number>): void;
    setItems(items: Array<DropItem>): void;
    selectItem(selectedItem: DropItem): void;
    searchByTitle(title: string): DropItem[];
    getFullPath(item: DropItem): Array<DropItem>;
}
