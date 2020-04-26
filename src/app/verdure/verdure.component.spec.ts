import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdureComponent } from './verdure.component';

describe('VerdureComponent', () => {
  let component: VerdureComponent;
  let fixture: ComponentFixture<VerdureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
