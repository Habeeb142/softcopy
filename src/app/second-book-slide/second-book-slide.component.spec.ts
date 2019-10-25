import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBookSlideComponent } from './second-book-slide.component';

describe('SecondBookSlideComponent', () => {
  let component: SecondBookSlideComponent;
  let fixture: ComponentFixture<SecondBookSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondBookSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondBookSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
