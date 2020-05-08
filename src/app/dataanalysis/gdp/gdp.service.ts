import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { GetNationGdpRequest } from './requests/get-nation-gdp.request';
import { GdpRecord } from './requests/gdp-record';
import { Observable } from 'rxjs';
import { CountryIsoCode, isoReference } from './country-iso-codes';
import { EnabledCountryOption } from './enabled-country-option';

@Injectable({
  providedIn: 'root'
})
export class GdpService {

  constructor(private httpService: HttpService) { 
    this.data = [];
  }

  public data: GdpRecord[];

  public loadData(countryISO2Codes: string[]): void {
    this.data = [];

    for(let countryISO2Code of countryISO2Codes){
      new GetNationGdpRequest(this.httpService, countryISO2Code).data
      .subscribe(records => {
        this.data = this.data.concat(
          records.filter(x => x.gdp != null)
        ); });
    }
  }

  public countryOptions: EnabledCountryOption[] = isoReference.map(x => this.referenceToEnabledCountryOption(x));

  private referenceToEnabledCountryOption(reference: CountryIsoCode): EnabledCountryOption{
    let option: EnabledCountryOption = {
      country: reference.country,
      countryISO2Code: reference.countryISO2Code,
      enabled: false
    }
    return option;
  }
}
