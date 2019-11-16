import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThesisComponent } from './my-thesis.component';

describe('MyThesisComponent', () => {
  let component: MyThesisComponent;
  let fixture: ComponentFixture<MyThesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
