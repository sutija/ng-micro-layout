import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropItemsComponent } from './drop-items.component';
import { DropService } from '../drop.service';

describe('DropItemsComponent', () => {
  let component: DropItemsComponent;
  let fixture: ComponentFixture<DropItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropItemsComponent ],
      providers: [DropService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
