import { GetNationGdpRequest } from './get-nation-gdp.request';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './../../../http.service';
import { GdpResponse } from './gdp-response';
import { GdpRecord } from './gdp-record';

describe('GetNationGdpRequest', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should create an instance', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
      expect(new GetNationGdpRequest(service, 'US')).toBeTruthy();
  }));

  it('should get worldbank api data', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
     new GetNationGdpRequest(service, 'US').data.subscribe(data => {
       expect(data.length).toEqual(2);

       expect(data[0].year).toEqual(response[1][0].date);
       expect(data[0].gdp).toEqual(response[1][0].value);
       expect(data[0].country).toEqual(response[1][0].country.value);
       expect(data[0].countryISO2Code).toEqual(response[1][0].country.id);

       expect(data[1].year).toEqual(response[1][1].date);
       expect(data[1].gdp).toEqual(response[1][1].value);
       expect(data[1].country).toEqual(response[1][1].country.value);
       expect(data[1].countryISO2Code).toEqual(response[1][1].country.id);
     });

      const req = httpMock.expectOne('https://api.worldbank.org/v2/country/US/indicator/NY.GDP.MKTP.CD?format=json');
      expect(req.request.method).toEqual('GET');

      let response: GdpResponse = {
        0: {
          lastupdated: new Date("2020-04-09"​​),
          page: 1​​,
          pages: 1​​,
          per_page: 40,​​
          sourceid: "1",​​
          total: 2
        },
        1: [{
          country: { id: "US", value: "United States" },​​​
          countryiso3code: "USA",​​​
          date: "2019",
          decimal: 0,
​​​          indicator: { id: "NY.GDP.MKTP.CD", value: "GDP (current US$)" },
​​​          obs_status: "",
​​​          unit: "",
​​​          value: 42},
​​​          {
  ​​​        country: { id: "US", value: "United States" },​​​
  ​​​        countryiso3code: "USA",​​​
  ​​​        date: "2018",
  ​​​        decimal: 0,
​​​          indicator: { id: "NY.GDP.MKTP.CD", value: "GDP (current US$)" },
​​​          obs_status: "",
​​​          unit: "",
​​​          value: 3.14}]
      };

      req.flush(response);
  }));

  it('should get paged worldbank api data', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, service: HttpService) => {
     new GetNationGdpRequest(service, 'US').data.subscribe(data => {
       expect(data.length).toEqual(3);

       expect(data[0].year).toEqual(response[1][0].date);
       expect(data[0].gdp).toEqual(response[1][0].value);
       expect(data[0].country).toEqual(response[1][0].country.value);
       expect(data[0].countryISO2Code).toEqual(response[1][0].country.id);

       expect(data[1].year).toEqual(response[1][1].date);
       expect(data[1].gdp).toEqual(response[1][1].value);
       expect(data[1].country).toEqual(response[1][1].country.value);
       expect(data[1].countryISO2Code).toEqual(response[1][1].country.id);

       expect(data[2].year).toEqual(pagedResponse[1][0].date);
       expect(data[2].gdp).toEqual(pagedResponse[1][0].value);
       expect(data[2].country).toEqual(pagedResponse[1][0].country.value);
       expect(data[2].countryISO2Code).toEqual(pagedResponse[1][0].country.id);
     });

      const req = httpMock.expectOne('https://api.worldbank.org/v2/country/US/indicator/NY.GDP.MKTP.CD?format=json');
      expect(req.request.method).toEqual('GET');

      let response: GdpResponse = {
        0: {
          lastupdated: new Date("2020-04-09"​​),
          page: 1​​,
          pages: 2,
          per_page: 2,​​
          sourceid: "1",​​
          total: 3
        },
        1: [{
          country: { id: "US", value: "United States" },​​​
          countryiso3code: "USA",​​​
          date: "2019",
          decimal: 0,
​​​          indicator: { id: "NY.GDP.MKTP.CD", value: "GDP (current US$)" },
​​​          obs_status: "",
​​​          unit: "",
​​​          value: 7},
​​​          {
  ​​​        country: { id: "US", value: "United States" },​​​
  ​​​        countryiso3code: "USA",​​​
  ​​​        date: "2018",
  ​​​        decimal: 0,
​​​          indicator: { id: "NY.GDP.MKTP.CD", value: "GDP (current US$)" },
​​​          obs_status: "",
​​​          unit: "",
​​​          value: 25}]
      };
      
      req.flush(response);

      const req2 = httpMock.expectOne('https://api.worldbank.org/v2/country/US/indicator/NY.GDP.MKTP.CD?format=json&page=2');
      expect(req2.request.method).toEqual('GET');

      let pagedResponse: GdpResponse = {
        0: {
          lastupdated: new Date("2020-04-09"​​),
          page: 2,
          pages: 2,
          per_page: 2,​​
          sourceid: "1",​​
          total: 3
        },
        1: [{
  ​​​        country: { id: "US", value: "United States" },​​​
  ​​​        countryiso3code: "USA",​​​
  ​​​        date: "2017",
  ​​​        decimal: 0,
​​​          indicator: { id: "NY.GDP.MKTP.CD", value: "GDP (current US$)" },
​​​          obs_status: "",
​​​          unit: "",
​​​          value: 6}]
      };      

      req2.flush(pagedResponse);
  }));
});
