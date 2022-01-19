import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDispoComponent } from './add-dispo.component';

describe('AddDispoComponent', () => {
  let component: AddDispoComponent;
  let fixture: ComponentFixture<AddDispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDispoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
