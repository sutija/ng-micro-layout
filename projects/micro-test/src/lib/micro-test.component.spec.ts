import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroTestComponent } from './micro-test.component';

describe('MicroTestComponent', () => {
  let component: MicroTestComponent;
  let fixture: ComponentFixture<MicroTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
