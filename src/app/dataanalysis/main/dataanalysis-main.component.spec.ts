import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalysisMainComponent } from './dataanalysis-main.component';

describe('DataAnalysisMainComponent', () => {
  let component: DataAnalysisMainComponent;
  let fixture: ComponentFixture<DataAnalysisMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAnalysisMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnalysisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
