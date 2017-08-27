import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanThreeComponent } from './superSaiyanThree.component';

describe('SuperSaiyanThreeComponent', () => {
  let component: SuperSaiyanThreeComponent;
  let fixture: ComponentFixture<SuperSaiyanThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
