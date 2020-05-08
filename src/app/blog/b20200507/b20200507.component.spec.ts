import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B20200507Component } from './b20200507.component';

describe('B20200507Component', () => {
  let component: B20200507Component;
  let fixture: ComponentFixture<B20200507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B20200507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B20200507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
