import {
    ChangeDetectionStrategy,
    Component, EventEmitter,
    Input,
    OnChanges,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';
import {DropService} from './drop.service';
import {DropItem} from './drop';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BUTTON_POSITIONS, BUTTON_STYLES, BUTTON_TYPES} from '../../buttons/button/button.constants';
import {state, style, trigger} from '@angular/animations';

@Component({
    animations: [
        trigger('toggle', [
            state('visible', style({
                height: '*'
            })),
            state('hidden', style({
                height: 0
            }))
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ml-drop',
    templateUrl: './drop.component.html',
    providers: [
        DropService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DropComponent,
            multi: true
        }
    ]
})
export class DropComponent extends FormControl implements OnInit, OnChanges, ControlValueAccessor {
    @Input() disabledIds: Array<number> = [];
    @Input() items: Array<DropItem> = [];
    @Input() value: number;
    @Input() editable = false;
    @Output() update: EventEmitter<DropItem> = new EventEmitter();
    @Output() delete: EventEmitter<DropItem> = new EventEmitter();
    @Output() add: EventEmitter<DropItem> = new EventEmitter();
    @Output() select: EventEmitter<DropItem> = new EventEmitter();

    dropVisible = false;
    dropButtonStyles = [
        BUTTON_POSITIONS.attachToRight,
        BUTTON_TYPES.primary,
        BUTTON_STYLES.flat
    ];
    foundItems: Array<DropItem> = [];
    onChange;
    path: Array<DropItem> = [];
    searchText: string;
    searchActive = false;
    selectedItem: DropItem = {
        title: null,
        parentId: null,
        id: null
    };

    constructor(private dropService: DropService) {
        super();
    }

    ngOnInit() {
        this.dropService.selectedItem$.subscribe(selectedItem => this.selectItem(selectedItem));
    }

    activateSearch() {
        this.searchActive = true;
    }

    selectItem(selectedItem: DropItem) {
        this.path = this.dropService.getFullPath(selectedItem);
        this.selectedItem = selectedItem;
        this.value = selectedItem.id;
        this.searchText = selectedItem.title;
        this.searchActive = false;
        this.dropVisible = false;

        this.select.emit(selectedItem);

        if (this.onChange) {
            this.onChange(this.value);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.dropService.setItems(this.items);
        if (changes['value'] && changes['value'].currentValue > 0) {
            this.selectItem(this.dropService.getItemById(this.value));
        }

        if (changes['disabledIds']) {
            this.dropService.setDisabledIds(changes['disabledIds'].currentValue);
        }
    }

    dropToggle(event) {
        console.log('toggle', this.dropVisible);
        this.dropVisible = !this.dropVisible;
    }

    writeValue(obj: number): void {
        this.value = obj;
    }

    registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    onKeyUp(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            this.searchActive = false;
            this.dropVisible = false;
            return;
        }
        this.foundItems = this.dropService.searchByTitle(this.searchText);
    }
}
