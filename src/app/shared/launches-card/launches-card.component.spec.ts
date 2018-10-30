import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesCardComponent } from './launches-card.component';

describe('LaunchesCardComponent', () => {
  let component: LaunchesCardComponent;
  let fixture: ComponentFixture<LaunchesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
