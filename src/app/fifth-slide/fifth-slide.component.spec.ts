import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthSlideComponent } from './fifth-slide.component';

describe('FifthSlideComponent', () => {
  let component: FifthSlideComponent;
  let fixture: ComponentFixture<FifthSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
