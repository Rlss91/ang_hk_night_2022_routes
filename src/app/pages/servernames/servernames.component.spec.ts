import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServernamesComponent } from './servernames.component';

describe('ServernamesComponent', () => {
  let component: ServernamesComponent;
  let fixture: ComponentFixture<ServernamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServernamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServernamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
