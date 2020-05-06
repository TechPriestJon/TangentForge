import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B20200506Component } from './b20200506.component';

describe('B20200506Component', () => {
  let component: B20200506Component;
  let fixture: ComponentFixture<B20200506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B20200506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B20200506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
