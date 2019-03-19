import { TestBed } from '@angular/core/testing';

import { TableMessagingService } from './table-messaging.service';

describe('TableMessagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableMessagingService = TestBed.get(TableMessagingService);
    expect(service).toBeTruthy();
  });
});
