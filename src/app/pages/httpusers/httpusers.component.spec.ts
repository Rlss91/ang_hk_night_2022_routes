import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpusersComponent } from './httpusers.component';

describe('HttpusersComponent', () => {
  let component: HttpusersComponent;
  let fixture: ComponentFixture<HttpusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
