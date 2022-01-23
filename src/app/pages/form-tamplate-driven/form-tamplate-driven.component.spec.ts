import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTamplateDrivenComponent } from './form-tamplate-driven.component';

describe('FormTamplateDrivenComponent', () => {
  let component: FormTamplateDrivenComponent;
  let fixture: ComponentFixture<FormTamplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTamplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTamplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
