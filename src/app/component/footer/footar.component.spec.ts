import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootarComponent } from './footar.component';

describe('FootarComponent', () => {
  let component: FootarComponent;
  let fixture: ComponentFixture<FootarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
