import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyScoreComponent } from './body-score.component';

describe('BodyScoreComponent', () => {
  let component: BodyScoreComponent;
  let fixture: ComponentFixture<BodyScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
