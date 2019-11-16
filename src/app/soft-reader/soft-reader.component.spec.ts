import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftReaderComponent } from './soft-reader.component';

describe('SoftReaderComponent', () => {
  let component: SoftReaderComponent;
  let fixture: ComponentFixture<SoftReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
