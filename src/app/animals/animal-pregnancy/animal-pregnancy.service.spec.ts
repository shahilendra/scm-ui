import { TestBed } from '@angular/core/testing';

import { AnimalPregnancyService } from './animal-pregnancy.service';

describe('AnimalPregnancyService', () => {
  let service: AnimalPregnancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalPregnancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
