import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedJournalComponent } from './fetched-journal.component';

describe('FetchedJournalComponent', () => {
  let component: FetchedJournalComponent;
  let fixture: ComponentFixture<FetchedJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchedJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchedJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
