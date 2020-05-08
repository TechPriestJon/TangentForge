import { HttpService } from 'src/app/http.service';
import { GdpRecord } from './gdp-record';
import { GdpResponse } from './gdp-response';
import { Observable, of, forkJoin } from 'rxjs';
import { map, mergeMap, concatMap,  } from 'rxjs/operators';

export class GetNationGdpRequest {
  constructor(private httpService: HttpService, countryISO2Code: string) { 
    this.url = 'https://api.worldbank.org/v2/country/' + countryISO2Code + '/indicator/NY.GDP.MKTP.CD?format=json';
    this.maxPages = 5;

    this.data = this.httpService.get<GdpResponse>(this.url)
      .pipe(map(response => {
        let gdpRecords: GdpRecord[] = [];
        let pages = response[0].pages;

        if(pages == null)
          return null;

        response[1].forEach(record => gdpRecords.push(new GdpRecord(record)));

        return { gdpRecords, pages };
      }))
      .pipe(concatMap(recordsWithPage => {
        if (recordsWithPage == null)
          return of(null);

        let pagedResponses: Observable<GdpRecord[]>[] = [];

        pagedResponses.push(of(recordsWithPage.gdpRecords));

        if(recordsWithPage.pages > 1) {
          for(let i = 2; i <= recordsWithPage.pages && recordsWithPage.pages < this.maxPages; i++){
            
            pagedResponses.push(
              this.httpService.get<GdpResponse>(this.url + '&page=' + i)
              .pipe(map(pagedResponse => {
                let pagedGdpRecords: GdpRecord[] = [];
                pagedResponse[1].forEach(record => pagedGdpRecords.push(new GdpRecord(record)));
                return pagedGdpRecords;
              }))
            );
          }
          return forkJoin(pagedResponses);
        } 
        else {
          return of([recordsWithPage.gdpRecords]);
        }
      }))
      .pipe(concatMap(pagedRecordLists => {
        let combinedRecords: GdpRecord[] = [];

        if(pagedRecordLists != null){
          for(let records of pagedRecordLists){
            combinedRecords = combinedRecords.concat(records);
          }
        }

        return of(combinedRecords);
      }));
  }

  private url: string;

  private maxPages: number;

  public data: Observable<GdpRecord[]>;  
}
