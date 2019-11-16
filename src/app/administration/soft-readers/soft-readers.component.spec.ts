import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftReadersComponent } from './soft-readers.component';

describe('SoftReadersComponent', () => {
  let component: SoftReadersComponent;
  let fixture: ComponentFixture<SoftReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
