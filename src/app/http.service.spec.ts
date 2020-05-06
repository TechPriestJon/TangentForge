import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('should get over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      service.get('https://techpriestjon.github.io/TangentForge/GET')
        .subscribe(x => expect(x['data']).toEqual("some data block"));

      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/GET');
      expect(req.request.method).toEqual('GET');
      req.flush({data: "some data block"});
  }));

  it('should handle get error over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      service.get('https://techpriestjon.github.io/TangentForge/GET2').subscribe();

      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/GET2');
      expect(req.request.method).toEqual('GET');
      let mockError: ErrorEvent = new ErrorEvent('MockError', {
        error : new Error('MockMessage'),
        message : 'Further Detail'
      });
      req.error(mockError, { status: 500 });
 }));

  it('should retry get over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      service.get('https://techpriestjon.github.io/TangentForge/GET3')
      .subscribe(x => expect(x['data']).toEqual("another data block"));

      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/GET3');
      expect(req.request.method).toEqual('GET');
      let mockError: ErrorEvent = new ErrorEvent('MockError', {
        error : new Error('MockMessage'),
        message : 'Further Detail'
      });
      req.error(mockError, { status: 500 });

      const req2 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/GET3');
      expect(req2.request.method).toEqual('GET');
      mockError = new ErrorEvent('SecondMockError', {
        error : new Error('SecondMockMessage'),
        message : 'Second Further Detail'
      });
      req2.error(mockError, { status: 500 });

      const req3 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/GET3');
      expect(req3.request.method).toEqual('GET');
      req3.flush({data: "another data block"});
  }));

  it('should post over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      let body = {data: "posted data block"}
      service.post('https://techpriestjon.github.io/TangentForge/POST', body)
        .subscribe(x => expect(x['data']).toEqual("returned post data block"));

      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/POST');
      expect(req.request.method).toEqual('POST');      
      expect(req.request.body.data).toEqual("posted data block");
      req.flush({data: "returned post data block"});
  }));

  it('should handle post error over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      let body = {data: "posted data block"}
      service.post('https://techpriestjon.github.io/TangentForge/POST2', body).subscribe();

      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/POST2');
      expect(req.request.method).toEqual('POST');
     
      expect(req.request.body.data).toEqual("posted data block");
      let mockError: ErrorEvent = new ErrorEvent('MockError', {
        error : new Error('MockMessage'),
        message : 'Further Detail'
      });
      req.error(mockError, { status: 500 });
 }));

 it('should put over http', inject([HttpTestingController, HttpService],
  (httpMock: HttpTestingController, service: HttpService) => {
    let body = {data: "put data block"}
    service.put('https://techpriestjon.github.io/TangentForge/PUT', body)
      .subscribe(x => expect(x['data']).toEqual("returned put data block"));

    const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PUT');
    expect(req.request.method).toEqual('PUT');
    req.flush({data: "returned put data block"});
  }));

  it('should handle put error over http', inject([HttpTestingController, HttpService],
  (httpMock: HttpTestingController, service: HttpService) => {
    let body = {data: "put data block"}
    service.put('https://techpriestjon.github.io/TangentForge/PUT2', body).subscribe();

    const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PUT2');
    expect(req.request.method).toEqual('PUT');
    let mockError: ErrorEvent = new ErrorEvent('MockError', {
      error : new Error('MockMessage'),
      message : 'Further Detail'
    });
    req.error(mockError, { status: 500 });
  }));

  it('should retry put over http', inject([HttpTestingController, HttpService],
  (httpMock: HttpTestingController, service: HttpService) => {
    let body = {data: "put data block"}
    service.put('https://techpriestjon.github.io/TangentForge/PUT3', body)
      .subscribe(x => expect(x['data']).toEqual("returned put data block"));

    const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PUT3');
    expect(req.request.method).toEqual('PUT');
    let mockError: ErrorEvent = new ErrorEvent('MockError', {
      error : new Error('MockMessage'),
      message : 'Further Detail'
    });
    req.error(mockError, { status: 500 });

    const req2 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PUT3');
    expect(req2.request.method).toEqual('PUT');
    mockError = new ErrorEvent('SecondMockError', {
      error : new Error('SecondMockMessage'),
      message : 'Second Further Detail'
    });
    req2.error(mockError, { status: 500 });

    const req3 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PUT3');
    expect(req3.request.method).toEqual('PUT');
    req3.flush({data: "returned put data block"});
  }));

  it('should patch over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      let body = {data: "patch data block"}
      service.patch('https://techpriestjon.github.io/TangentForge/PATCH', body)
        .subscribe(x => expect(x['data']).toEqual("returned patch data block"));
  
      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PATCH');
      expect(req.request.method).toEqual('PATCH');
      req.flush({data: "returned patch data block"});
    }));
  
    it('should handle patch error over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      let body = {data: "patch data block"}
      service.patch('https://techpriestjon.github.io/TangentForge/PATCH2', body).subscribe();
  
      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PATCH2');
      expect(req.request.method).toEqual('PATCH');
      let mockError: ErrorEvent = new ErrorEvent('MockError', {
        error : new Error('MockMessage'),
        message : 'Further Detail'
      });
      req.error(mockError, { status: 500 });
    }));
  
    it('should retry patch over http', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      let body = {data: "patch data block"}
      service.patch('https://techpriestjon.github.io/TangentForge/PATCH3', body)
        .subscribe(x => expect(x['data']).toEqual("returned patch data block"));
  
      const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PATCH3');
      expect(req.request.method).toEqual('PATCH');
      let mockError: ErrorEvent = new ErrorEvent('MockError', {
        error : new Error('MockMessage'),
        message : 'Further Detail'
      });
      req.error(mockError, { status: 500 });
  
      const req2 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PATCH3');
      expect(req2.request.method).toEqual('PATCH');
      mockError = new ErrorEvent('SecondMockError', {
        error : new Error('SecondMockMessage'),
        message : 'Second Further Detail'
      });
      req2.error(mockError, { status: 500 });
  
      const req3 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/PATCH3');
      expect(req3.request.method).toEqual('PATCH');
      req3.flush({data: "returned patch data block"});
    }));

    it('should delete over http', inject([HttpTestingController, HttpService],
      (httpMock: HttpTestingController, service: HttpService) => {
        service.delete('https://techpriestjon.github.io/TangentForge/DELETE')
          .subscribe(x => expect(x['data']).toEqual("returned delete data block"));
    
        const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/DELETE');
        expect(req.request.method).toEqual('DELETE');
        req.flush({data: "returned delete data block"});
      }));
    
      it('should handle delete error over http', inject([HttpTestingController, HttpService],
      (httpMock: HttpTestingController, service: HttpService) => {
        service.delete('https://techpriestjon.github.io/TangentForge/DELETE2').subscribe();
    
        const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/DELETE2');
        expect(req.request.method).toEqual('DELETE');
        let mockError: ErrorEvent = new ErrorEvent('MockError', {
          error : new Error('MockMessage'),
          message : 'Further Detail'
        });
        req.error(mockError, { status: 500 });
      }));
    
      it('should retry delete over http', inject([HttpTestingController, HttpService],
      (httpMock: HttpTestingController, service: HttpService) => {
        service.delete('https://techpriestjon.github.io/TangentForge/DELETE3')
          .subscribe(x => expect(x['data']).toEqual("returned delete data block"));
    
        const req = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/DELETE3');
        expect(req.request.method).toEqual('DELETE');
        let mockError: ErrorEvent = new ErrorEvent('MockError', {
          error : new Error('MockMessage'),
          message : 'Further Detail'
        });
        req.error(mockError, { status: 500 });
    
        const req2 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/DELETE3');
        expect(req2.request.method).toEqual('DELETE');
        mockError = new ErrorEvent('SecondMockError', {
          error : new Error('SecondMockMessage'),
          message : 'Second Further Detail'
        });
        req2.error(mockError, { status: 500 });
    
        const req3 = httpMock.expectOne('https://techpriestjon.github.io/TangentForge/DELETE3');
        expect(req3.request.method).toEqual('DELETE');
        req3.flush({data: "returned delete data block"});
      }));

});
