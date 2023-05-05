import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalWeightComponent } from './animal-weight.component';

describe('AnimalWeightComponent', () => {
  let component: AnimalWeightComponent;
  let fixture: ComponentFixture<AnimalWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
