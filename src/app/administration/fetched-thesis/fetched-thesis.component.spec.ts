import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedThesisComponent } from './fetched-thesis.component';

describe('FetchedThesisComponent', () => {
  let component: FetchedThesisComponent;
  let fixture: ComponentFixture<FetchedThesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchedThesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchedThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
