import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapTagComponent } from './google-map-tag.component';

describe('GoogleMapTagComponent', () => {
  let component: GoogleMapTagComponent;
  let fixture: ComponentFixture<GoogleMapTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
