import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TABLE_COLUMN_TYPES} from '../table.constants';

@Component({
  selector: 'ml-table-column, [ml-table-column]',
  templateUrl: './table-column.component.html',
})
export class TableColumnComponent implements OnChanges, OnDestroy {
  dataValue: any = false;
  protected componentRef: ComponentRef<any>;
  protected subscriptions$ = [];

  @Input()
  get data() {
    return this.dataValue;
  }

  set data(val) {
    this.dataValue = val;
    this.dataChange.emit(this.dataValue);
  }

  @Output() dataChange = new EventEmitter<Boolean>();
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  @Input() isEditing: Boolean = false;
  @Input() isEditable: Boolean = true;
  @Input() columnType: String;
  @ViewChild('columnComponent', {read: ViewContainerRef}) columnComponent: ViewContainerRef;

  tableColumnTypes = TABLE_COLUMN_TYPES;

  constructor(private compiler: ComponentFactoryResolver) {
  }

  ngOnChanges(newData) {
    if (newData.data) {
      this.handleData();
    }
  }

  onElementClick() {
    this.clicked.emit(true);
  }

  handleData() {
    if (this.dataValue instanceof Array) {
      this.dataValue.forEach(component =>
          this.render(component));
    } else {
      this.render(this.dataValue);
    }
  }

  render(component) {
    if (component && this.columnType === TABLE_COLUMN_TYPES.COMPONENT) {
      this.componentRef =
          this.columnComponent.createComponent(
              this.compiler.resolveComponentFactory(component.component));

      // Set component params
      component.componentParams.forEach(param => {
        if (param.value instanceof Function) {
          // Subscribe to event
          this.subscriptions$.push(
              this.componentRef.instance[param.name]
                  .subscribe(e => {
                    param.value(e);
                  }));
        } else {
          // Set param
          this.componentRef.instance[param.name] = param.value;
        }
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions$.forEach(
        subscription =>
            subscription.unsubscribe()
    );
  }
}
