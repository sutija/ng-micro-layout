import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsComponent } from './parts.component';
import { ButtonsModule } from 'micro-layout-lib/lib/buttons/buttons.module';

describe('PartsComponent', () => {
  let component: PartsComponent;
  let fixture: ComponentFixture<PartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsComponent ],
      imports: [ButtonsModule]
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
