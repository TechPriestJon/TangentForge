import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuppakComponent } from './cuppak.component';

describe('CuppakComponent', () => {
  let component: CuppakComponent;
  let fixture: ComponentFixture<CuppakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuppakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuppakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
