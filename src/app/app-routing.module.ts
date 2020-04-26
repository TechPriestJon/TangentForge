import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuppakComponent } from './cuppak/cuppak.component';
import { MainComponent } from './main/main.component'
import { VerdureComponent } from './verdure/verdure.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cuppak', component: CuppakComponent },
  { path: 'verdure', component: VerdureComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
