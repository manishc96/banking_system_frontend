import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTranscationComponent } from './my-transcation.component';

describe('MyTranscationComponent', () => {
  let component: MyTranscationComponent;
  let fixture: ComponentFixture<MyTranscationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTranscationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTranscationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
