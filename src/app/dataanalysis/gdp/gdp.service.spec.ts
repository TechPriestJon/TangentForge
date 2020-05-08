import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GdpService } from './gdp.service';

describe('GdpService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GdpService = TestBed.get(GdpService);
    expect(service).toBeTruthy();
  });
});
