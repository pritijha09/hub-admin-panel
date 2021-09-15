import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubHubComponent } from './view-sub-hub.component';

describe('ViewSubHubComponent', () => {
  let component: ViewSubHubComponent;
  let fixture: ComponentFixture<ViewSubHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
