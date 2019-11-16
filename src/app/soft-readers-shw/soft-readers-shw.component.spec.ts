import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftReadersShwComponent } from './soft-readers-shw.component';

describe('SoftReadersShwComponent', () => {
  let component: SoftReadersShwComponent;
  let fixture: ComponentFixture<SoftReadersShwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftReadersShwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftReadersShwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
