import { TestBed } from '@angular/core/testing';

import { InseminationService } from './insemination.service';

describe('InseminationService', () => {
  let service: InseminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InseminationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
