import { GdpResponseSecond } from './gdp-response';

export class GdpRecord {
  constructor (record: GdpResponseSecond){
    this.country = record.country.value;
    this.countryISO2Code = record.country.id;
    this.year = record.date;
    this.gdp = record.value;
  }

  public countryISO2Code: string;
  public country: string;
  public year: string;
  public gdp: number;
}

