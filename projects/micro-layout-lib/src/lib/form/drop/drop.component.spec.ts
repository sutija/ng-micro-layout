import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropComponent } from './drop.component';
import { DropItemsComponent } from './drop-items/drop-items.component';
import { DropService } from './drop.service';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../../buttons/buttons.module';

describe('DropComponent', () => {
  let component: DropComponent;
  let fixture: ComponentFixture<DropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DropComponent,
        DropItemsComponent
       ],
       imports: [
         ButtonsModule,
         FormsModule
       ],
       providers: [
         DropService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
