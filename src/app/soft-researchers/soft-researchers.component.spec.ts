import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftResearchersComponent } from './soft-researchers.component';

describe('SoftResearchersComponent', () => {
  let component: SoftResearchersComponent;
  let fixture: ComponentFixture<SoftResearchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftResearchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftResearchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
