import { TestBed } from '@angular/core/testing';

import { LactationService } from './lactation.service';

describe('LactationService', () => {
  let service: LactationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LactationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
