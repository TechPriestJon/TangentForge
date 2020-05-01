import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaconsarnieComponent } from './baconsarnie.component';

describe('BaconsarnieComponent', () => {
  let component: BaconsarnieComponent;
  let fixture: ComponentFixture<BaconsarnieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaconsarnieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaconsarnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
