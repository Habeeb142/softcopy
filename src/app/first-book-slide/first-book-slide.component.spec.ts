import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBookSlideComponent } from './first-book-slide.component';

describe('FirstBookSlideComponent', () => {
  let component: FirstBookSlideComponent;
  let fixture: ComponentFixture<FirstBookSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstBookSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstBookSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
