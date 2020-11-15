import { TestBed } from '@angular/core/testing';

import { DataDataToServerService } from './data-data-to-server.service';

describe('DataDataToServerService', () => {
  let service: DataDataToServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDataToServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
