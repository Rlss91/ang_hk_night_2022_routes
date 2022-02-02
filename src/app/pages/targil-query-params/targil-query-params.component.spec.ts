import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargilQueryParamsComponent } from './targil-query-params.component';

describe('TargilQueryParamsComponent', () => {
  let component: TargilQueryParamsComponent;
  let fixture: ComponentFixture<TargilQueryParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargilQueryParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargilQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
