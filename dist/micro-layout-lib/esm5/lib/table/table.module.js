/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumnComponent } from './table-column/table-column.component';
import { TableContainerComponent } from './table-container/table-container.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';
import { TableHeaderComponent } from './table-header/table-header.component';
import { PipesModule } from '../pipes/pipes.module';
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TableColumnComponent,
                        TableContainerComponent,
                        TableHeaderComponent,
                        TableRowComponent,
                        TableComponent
                    ],
                    imports: [
                        FormsModule,
                        FormModule,
                        CommonModule,
                        PipesModule
                    ],
                    exports: [
                        TableColumnComponent,
                        TableContainerComponent,
                        TableHeaderComponent,
                        TableRowComponent,
                        TableComponent
                    ],
                },] }
    ];
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWljcm8tbGF5b3V0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRDtJQUFBO0lBdUJBLENBQUM7O2dCQXZCQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsY0FBYztxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixZQUFZO3dCQUNaLFdBQVc7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsY0FBYztxQkFDakI7aUJBQ0o7O0lBRUQsa0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQURZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUYWJsZUNvbHVtbkNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS1jb2x1bW4vdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQge1RhYmxlQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWNvbnRhaW5lci90YWJsZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVSb3dDb21wb25lbnR9IGZyb20gJy4vdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGb3JtTW9kdWxlfSBmcm9tICcuLi9mb3JtL2Zvcm0ubW9kdWxlJztcbmltcG9ydCB7VGFibGVIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtQaXBlc01vZHVsZX0gZnJvbSAnLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGFibGVDb2x1bW5Db21wb25lbnQsXG4gICAgICAgIFRhYmxlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICBUYWJsZUhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgVGFibGVSb3dDb21wb25lbnQsXG4gICAgICAgIFRhYmxlQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBGb3JtTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRhYmxlQ29sdW1uQ29tcG9uZW50LFxuICAgICAgICBUYWJsZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgVGFibGVIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIFRhYmxlUm93Q29tcG9uZW50LFxuICAgICAgICBUYWJsZUNvbXBvbmVudFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcbn1cbiJdfQ==