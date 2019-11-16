import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedTextbookComponent } from './fetched-textbook.component';

describe('FetchedTextbookComponent', () => {
  let component: FetchedTextbookComponent;
  let fixture: ComponentFixture<FetchedTextbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchedTextbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchedTextbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
