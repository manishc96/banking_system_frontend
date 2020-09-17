import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTranscationComponent } from './user-transcation.component';

describe('UserTranscationComponent', () => {
  let component: UserTranscationComponent;
  let fixture: ComponentFixture<UserTranscationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTranscationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTranscationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
