import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroLayoutLibComponent } from './micro-layout-lib.component';

describe('MicroLayoutLibComponent', () => {
  let component: MicroLayoutLibComponent;
  let fixture: ComponentFixture<MicroLayoutLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroLayoutLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroLayoutLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
