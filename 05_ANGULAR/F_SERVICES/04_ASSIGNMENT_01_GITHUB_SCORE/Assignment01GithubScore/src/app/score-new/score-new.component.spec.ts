import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreNewComponent } from './score-new.component';

describe('ScoreNewComponent', () => {
  let component: ScoreNewComponent;
  let fixture: ComponentFixture<ScoreNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
