import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubHubComponent } from './create-sub-hub.component';

describe('CreateSubHubComponent', () => {
  let component: CreateSubHubComponent;
  let fixture: ComponentFixture<CreateSubHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
