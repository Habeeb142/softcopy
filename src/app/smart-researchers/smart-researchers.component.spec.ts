import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartResearchersComponent } from './smart-researchers.component';

describe('SmartResearchersComponent', () => {
  let component: SmartResearchersComponent;
  let fixture: ComponentFixture<SmartResearchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartResearchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartResearchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
