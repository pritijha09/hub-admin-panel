import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonnComponent } from './commonn.component';

describe('CommonnComponent', () => {
  let component: CommonnComponent;
  let fixture: ComponentFixture<CommonnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
