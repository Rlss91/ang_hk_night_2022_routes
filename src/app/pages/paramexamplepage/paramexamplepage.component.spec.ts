import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamexamplepageComponent } from './paramexamplepage.component';

describe('ParamexamplepageComponent', () => {
  let component: ParamexamplepageComponent;
  let fixture: ComponentFixture<ParamexamplepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamexamplepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamexamplepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
