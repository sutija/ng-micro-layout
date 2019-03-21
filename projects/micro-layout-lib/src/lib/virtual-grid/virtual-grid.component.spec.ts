import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualGridComponent } from './virtual-grid.component';
import {VirtualGridService} from './virtual-grid.service';

describe('VirtualGridComponent', () => {
  let component: VirtualGridComponent;
  let fixture: ComponentFixture<VirtualGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualGridComponent ],
      providers: [VirtualGridService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
