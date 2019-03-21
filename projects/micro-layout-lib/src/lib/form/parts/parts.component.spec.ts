import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsComponent } from './parts.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

describe('PartsComponent', () => {
  let component: PartsComponent;
  let fixture: ComponentFixture<PartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ PartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
