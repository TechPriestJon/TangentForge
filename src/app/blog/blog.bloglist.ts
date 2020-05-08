import { Routes } from '@angular/router';
import { B20200428Component } from './b20200428/b20200428.component';
import { B20200506Component } from './b20200506/b20200506.component';
import { B20200507Component } from './b20200507/b20200507.component';

export const blogRoutes: Routes = [
    { path: 'b20200428', component: B20200428Component },
    { path: 'b20200506', component: B20200506Component },
    { path: 'b20200507', component: B20200507Component },
  ];
