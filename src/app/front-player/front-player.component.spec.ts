import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPlayerComponent } from './front-player.component';

describe('FrontPlayerComponent', () => {
  let component: FrontPlayerComponent;
  let fixture: ComponentFixture<FrontPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
