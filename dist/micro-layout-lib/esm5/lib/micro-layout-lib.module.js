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
import { Ng2OrderModule, Ng2OrderPipe } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import { FormModule } from './form/form.module';
import { MessageModule } from './message/message.module';
import { MicroLayoutLibComponent } from './micro-layout-lib.component';
import { VirtualGridComponent } from './virtual-grid/virtual-grid.component';
var MicroLayoutLibModule = /** @class */ (function () {
    function MicroLayoutLibModule() {
    }
    MicroLayoutLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
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
                    providers: [Ng2OrderPipe]
                },] }
    ];
    return MicroLayoutLibModule;
}());
export { MicroLayoutLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm8tbGF5b3V0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9taWNyby1sYXlvdXQtbGliLyIsInNvdXJjZXMiOlsibGliL21pY3JvLWxheW91dC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUUsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUFBQTtJQTZCb0MsQ0FBQzs7Z0JBN0JwQyxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsVUFBVTt3QkFDVixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGFBQWE7d0JBQ2IsVUFBVTt3QkFDVixVQUFVO3dCQUNWLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGFBQWE7d0JBQ2Isb0JBQW9CO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzVCOztJQUNtQywyQkFBQztDQUFBLEFBN0JyQyxJQTZCcUM7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QnV0dG9uc01vZHVsZX0gZnJvbSAnLi9idXR0b25zL2J1dHRvbnMubW9kdWxlJztcbmltcG9ydCB7Q2FyZE1vZHVsZX0gZnJvbSAnLi9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7TGlua01vZHVsZX0gZnJvbSAnLi9saW5rL2xpbmsubW9kdWxlJztcbmltcG9ydCB7UHJvZ3Jlc3NNb2R1bGV9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MubW9kdWxlJztcbmltcG9ydCB7VGFibGVNb2R1bGV9IGZyb20gJy4vdGFibGUvdGFibGUubW9kdWxlJztcbmltcG9ydCB7TmcyT3JkZXJNb2R1bGUsIE5nMk9yZGVyUGlwZX0gZnJvbSAnbmcyLW9yZGVyLXBpcGUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGb3JtTW9kdWxlfSBmcm9tICcuL2Zvcm0vZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHtNZXNzYWdlTW9kdWxlfSBmcm9tICcuL21lc3NhZ2UvbWVzc2FnZS5tb2R1bGUnO1xuaW1wb3J0IHsgTWljcm9MYXlvdXRMaWJDb21wb25lbnQgfSBmcm9tICcuL21pY3JvLWxheW91dC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IFZpcnR1YWxHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dWFsLWdyaWQvdmlydHVhbC1ncmlkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1pY3JvTGF5b3V0TGliQ29tcG9uZW50LFxuICAgICAgICBWaXJ0dWFsR3JpZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3JtTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBDYXJkTW9kdWxlLFxuICAgICAgICBMaW5rTW9kdWxlLFxuICAgICAgICBQcm9ncmVzc01vZHVsZSxcbiAgICAgICAgVGFibGVNb2R1bGUsXG4gICAgICAgIE5nMk9yZGVyTW9kdWxlLFxuICAgICAgICBNZXNzYWdlTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEJ1dHRvbnNNb2R1bGUsXG4gICAgICAgIENhcmRNb2R1bGUsXG4gICAgICAgIExpbmtNb2R1bGUsXG4gICAgICAgIFByb2dyZXNzTW9kdWxlLFxuICAgICAgICBUYWJsZU1vZHVsZSxcbiAgICAgICAgRm9ybU1vZHVsZSxcbiAgICAgICAgTWVzc2FnZU1vZHVsZSxcbiAgICAgICAgVmlydHVhbEdyaWRDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW05nMk9yZGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgTWljcm9MYXlvdXRMaWJNb2R1bGUgeyB9XG4iXX0=