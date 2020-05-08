import { Component, OnInit } from '@angular/core';
import { GdpRecord } from './requests/gdp-record';
import { GdpService } from './gdp.service';

@Component({
  selector: 'app-gdp',
  templateUrl: './gdp.component.html',
  styleUrls: ['./gdp.component.sass']
})
export class GdpComponent implements OnInit {

  constructor(private gdpService: GdpService) { 
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

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    let searchISOCodes = this.gdpService.countryOptions
      .filter(x => x.enabled == true).map(x => x.countryISO2Code);

    console.log(this.gdpService.countryOptions
      .filter(x => x.enabled == true));

    console.log(searchISOCodes);
    this.gdpService.loadData(searchISOCodes);

    this.data = this.gdpService.data;
  }

  private gdpCurrencyFormatter(params) {      
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      .format(Math.ceil(params.value/100000)*100000).toString();
  }
  
  private formatNumber(number: number) {
    return (Math.ceil(number/100000)*100000)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, ',');
  }

  private abc: boolean = false;

  private data: GdpRecord[];

  private columnDefs: any;
  
  private gridOptions: any;

}
