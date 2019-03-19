import { TestBed } from '@angular/core/testing';

import { MicroLayoutLibService } from './micro-layout-lib.service';

describe('MicroLayoutLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroLayoutLibService = TestBed.get(MicroLayoutLibService);
    expect(service).toBeTruthy();
  });
});
