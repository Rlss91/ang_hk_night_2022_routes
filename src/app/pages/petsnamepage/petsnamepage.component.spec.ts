import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsnamepageComponent } from './petsnamepage.component';

describe('PetsnamepageComponent', () => {
  let component: PetsnamepageComponent;
  let fixture: ComponentFixture<PetsnamepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsnamepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsnamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
