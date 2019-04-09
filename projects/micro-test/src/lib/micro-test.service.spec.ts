import { TestBed } from '@angular/core/testing';

import { MicroTestService } from './micro-test.service';

describe('MicroTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroTestService = TestBed.get(MicroTestService);
    expect(service).toBeTruthy();
  });
});
