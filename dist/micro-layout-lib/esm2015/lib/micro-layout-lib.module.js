/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from './buttons/buttons.module';
import { CardModule } from './card/card.module';
import { LinkModule } from './link/link.module';
import { ProgressModule } from './progress/progress.module';
import { TableModule } from './table/table.module';
import { ArrayToChunksPipe } from './pipes/array.pipe';
import { Ng2OrderModule, Ng2OrderPipe } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import { FormModule } from './form/form.module';
import { MessageModule } from './message/message.module';
import { MicroLayoutLibComponent } from './micro-layout-lib.component';
import { VirtualGridComponent } from './virtual-grid/virtual-grid.component';
export class MicroLayoutLibModule {
}
MicroLayoutLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ArrayToChunksPipe,
                    MicroLayoutLibComponent,
                    VirtualGridComponent
                ],
                imports: [
                    FormModule,
                    FormsModule,
                    CommonModule,
                    ButtonsModule,
                    CardModule,
                    LinkModule,
                    ProgressModule,
                    TableModule,
                    Ng2OrderModule,
                    MessageModule
                ],
                exports: [
                    ButtonsModule,
                    CardModule,
                    LinkModule,
                    ProgressModule,
                    TableModule,
                    FormModule,
                    MessageModule,
                    VirtualGridComponent
                ],
                providers: [ArrayToChunksPipe, Ng2OrderPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm8tbGF5b3V0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL21pY3JvLWxheW91dC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUUsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFnQzdFLE1BQU0sT0FBTyxvQkFBb0I7OztZQTlCaEMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsVUFBVTtvQkFDVixXQUFXO29CQUNYLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsY0FBYztvQkFDZCxXQUFXO29CQUNYLGNBQWM7b0JBQ2QsYUFBYTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixVQUFVO29CQUNWLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxVQUFVO29CQUNWLGFBQWE7b0JBQ2Isb0JBQW9CO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtCdXR0b25zTW9kdWxlfSBmcm9tICcuL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUnO1xuaW1wb3J0IHtDYXJkTW9kdWxlfSBmcm9tICcuL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHtMaW5rTW9kdWxlfSBmcm9tICcuL2xpbmsvbGluay5tb2R1bGUnO1xuaW1wb3J0IHtQcm9ncmVzc01vZHVsZX0gZnJvbSAnLi9wcm9ncmVzcy9wcm9ncmVzcy5tb2R1bGUnO1xuaW1wb3J0IHtUYWJsZU1vZHVsZX0gZnJvbSAnLi90YWJsZS90YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHtBcnJheVRvQ2h1bmtzUGlwZX0gZnJvbSAnLi9waXBlcy9hcnJheS5waXBlJztcbmltcG9ydCB7TmcyT3JkZXJNb2R1bGUsIE5nMk9yZGVyUGlwZX0gZnJvbSAnbmcyLW9yZGVyLXBpcGUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGb3JtTW9kdWxlfSBmcm9tICcuL2Zvcm0vZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHtNZXNzYWdlTW9kdWxlfSBmcm9tICcuL21lc3NhZ2UvbWVzc2FnZS5tb2R1bGUnO1xuaW1wb3J0IHsgTWljcm9MYXlvdXRMaWJDb21wb25lbnQgfSBmcm9tICcuL21pY3JvLWxheW91dC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IFZpcnR1YWxHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dWFsLWdyaWQvdmlydHVhbC1ncmlkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFycmF5VG9DaHVua3NQaXBlLFxuICAgICAgICBNaWNyb0xheW91dExpYkNvbXBvbmVudCxcbiAgICAgICAgVmlydHVhbEdyaWRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgRm9ybU1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgQ2FyZE1vZHVsZSxcbiAgICAgICAgTGlua01vZHVsZSxcbiAgICAgICAgUHJvZ3Jlc3NNb2R1bGUsXG4gICAgICAgIFRhYmxlTW9kdWxlLFxuICAgICAgICBOZzJPcmRlck1vZHVsZSxcbiAgICAgICAgTWVzc2FnZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBDYXJkTW9kdWxlLFxuICAgICAgICBMaW5rTW9kdWxlLFxuICAgICAgICBQcm9ncmVzc01vZHVsZSxcbiAgICAgICAgVGFibGVNb2R1bGUsXG4gICAgICAgIEZvcm1Nb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VNb2R1bGUsXG4gICAgICAgIFZpcnR1YWxHcmlkQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcnJheVRvQ2h1bmtzUGlwZSwgTmcyT3JkZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBNaWNyb0xheW91dExpYk1vZHVsZSB7IH1cbiJdfQ==