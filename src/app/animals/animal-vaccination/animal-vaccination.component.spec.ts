import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalVaccinationComponent } from './animal-vaccination.component';

describe('AnimalVaccinationComponent', () => {
  let component: AnimalVaccinationComponent;
  let fixture: ComponentFixture<AnimalVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalVaccinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
