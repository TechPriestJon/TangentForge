import { Routes } from '@angular/router';
import { DataAnalysisMainComponent } from './main/dataanalysis-main.component';
import { GdpComponent } from './gdp/gdp.component';

export const projectRoutes: Routes = [
    { path: '', component: DataAnalysisMainComponent },
    { path: 'gdp', component: GdpComponent }
  ];
