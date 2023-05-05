import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInseminationComponent } from './add-insemination.component';

describe('AddInseminationComponent', () => {
  let component: AddInseminationComponent;
  let fixture: ComponentFixture<AddInseminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInseminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInseminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
