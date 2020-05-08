export interface GdpResponse {
  0: GdpResponseFirst;
  1: GdpResponseSecond[];
}

export interface GdpResponseFirst {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: Date;
}

export interface GdpResponseSecond {
  indicator: GdpResponseSecondIndicator;
  country: GdpResponseSecondCountry;
  countryiso3code: string;
  date: string;
  value: number;
  unit: string;
  obs_status: string;
  decimal: number;
}

export interface GdpResponseSecondIndicator {
    id: string;
    value: string;
}

export interface GdpResponseSecondCountry {
    id: string;
    value: string;
}
