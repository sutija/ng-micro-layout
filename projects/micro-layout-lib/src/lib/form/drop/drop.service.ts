import {Injectable} from '@angular/core';
import {DropItem} from './drop';
import {Subject} from 'rxjs';
import {Drop} from '../../table/table.interface';

@Injectable()
export class DropService {
    private items: Array<DropItem> = [];
    private selectedItem: DropItem;
    protected disabledIds: Array<number> = [];
    public readonly selectedItem$: Subject<DropItem> = new Subject();

    constructor() {
    }

    getItemsByParentId(id: number) {
        return this.items.filter(item => item.parentId === id);
    }

    getItemById(id: number) {
        return this.items.find(item => item.id === id);
    }

    setDisabledIds(ids: Array<number>) {
        this.disabledIds = ids;
    }

    setItems(items: Array<DropItem>) {
        this.items = items;
    }

    selectItem(selectedItem: DropItem) {
        this.selectedItem = selectedItem;
        this.selectedItem$.next(this.selectedItem);
    }

    searchByTitle(title: string) {
        if (title) {
            return this.items.filter(item => item.title.toLowerCase().search(title.toLowerCase()) >= 0);
        }
    }

    getFullPath(item: DropItem): Array<DropItem> {
        return this.items.reduce((prev, curr) => {
            if (prev && prev[prev.length - 1].parentId
                === curr.id) {
                prev.push(curr);
            }
            return prev;
        }, [item]).reverse();
    }
}
