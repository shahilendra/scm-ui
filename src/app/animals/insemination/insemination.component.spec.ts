import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InseminationComponent } from './insemination.component';

describe('InseminationComponent', () => {
  let component: InseminationComponent;
  let fixture: ComponentFixture<InseminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InseminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InseminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
