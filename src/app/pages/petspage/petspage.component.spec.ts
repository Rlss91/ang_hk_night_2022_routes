import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetspageComponent } from './petspage.component';

describe('PetspageComponent', () => {
  let component: PetspageComponent;
  let fixture: ComponentFixture<PetspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
