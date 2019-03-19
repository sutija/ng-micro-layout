import { TestBed } from '@angular/core/testing';

import { VirtualGridService } from './virtual-grid.service';

describe('VirtualGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VirtualGridService = TestBed.get(VirtualGridService);
    expect(service).toBeTruthy();
  });
});
