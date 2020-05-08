import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './../../http.service';
import { GdpComponent } from './gdp.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

describe('GdpComponent', () => {
  let component: GdpComponent;
  let fixture: ComponentFixture<GdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdpComponent ],
      imports: [HttpClientTestingModule,
        FormsModule,
        MatCheckboxModule,
        AgGridModule.withComponents([]),]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
    expect(component).toBeTruthy();
  }));
});
