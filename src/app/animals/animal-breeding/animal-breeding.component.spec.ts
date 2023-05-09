import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBreedingComponent } from './animal-breeding.component';

describe('AnimalBreedingComponent', () => {
  let component: AnimalBreedingComponent;
  let fixture: ComponentFixture<AnimalBreedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalBreedingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalBreedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
