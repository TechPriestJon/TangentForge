import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B20200428Component } from './b20200428.component';

describe('B20200428Component', () => {
  let component: B20200428Component;
  let fixture: ComponentFixture<B20200428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B20200428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B20200428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
