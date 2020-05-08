import { Component, OnInit } from '@angular/core';
import { GdpRecord } from './requests/gdp-record';
import { GdpService } from './gdp.service';

@Component({
  selector: 'app-gdp',
  templateUrl: './gdp.component.html',
  styleUrls: ['./gdp.component.sass']
})
export class GdpComponent implements OnInit {

  constructor(public gdpService: GdpService) { 
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: this.gdpService.data,
      defaultColDef: {
        filter: true,
        sortable: true
      },
    };

    this.columnDefs = [
      {headerName: "ISO", field: "countryISO2Code"},
      {headerName: "Country", field: "country"},
      {headerName: "Year", field: "year", sort: 'desc'},
      {headerName: "GDP (Current US$)", field: "gdp",  
        valueFormatter: this.gdpCurrencyFormatter, cellClass: 'grid-cell-right'}
    ]; 
  }

  ngOnInit() {  }

  loadData(){
    let searchISOCodes = this.gdpService.countryOptions
      .filter(x => x.enabled == true).map(x => x.countryISO2Code);

    this.gdpService.loadData(searchISOCodes);
  }

  private gdpCurrencyFormatter(params) {      
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      .format(Math.ceil(params.value/100000)*100000).toString();
  }

  public columnDefs: any;
  
  public gridOptions: any;

}
