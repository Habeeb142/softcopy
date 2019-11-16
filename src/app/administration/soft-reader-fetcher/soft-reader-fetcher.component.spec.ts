import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftReaderFetcherComponent } from './soft-reader-fetcher.component';

describe('SoftReaderFetcherComponent', () => {
  let component: SoftReaderFetcherComponent;
  let fixture: ComponentFixture<SoftReaderFetcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftReaderFetcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftReaderFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
