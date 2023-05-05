import { TestBed } from '@angular/core/testing';

import { MilkYieldService } from './milk-yield.service';

describe('MilkYieldService', () => {
  let service: MilkYieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilkYieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
