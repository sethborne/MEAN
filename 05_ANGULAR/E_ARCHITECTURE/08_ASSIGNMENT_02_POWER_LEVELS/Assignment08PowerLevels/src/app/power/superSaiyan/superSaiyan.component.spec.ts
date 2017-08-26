import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanComponent } from './superSaiyan.component';

describe('SupersaiyanComponent', () => {
  let component: SuperSaiyanComponent;
  let fixture: ComponentFixture<SuperSaiyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
