import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuppakComponent } from './cuppak/cuppak.component';
import { MainComponent } from './main/main.component';
import { VerdureComponent } from './verdure/verdure.component';
import { BaconsarnieComponent } from './baconsarnie/baconsarnie.component';
import { InfoComponent } from './info/info.component';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { CyberneticsComponent } from './cybernetics/cybernetics.component';
import { DataanalysisComponent } from './dataanalysis/dataanalysis.component';
import { GamesComponent } from './games/games.component';
import { MachinelearningComponent } from './machinelearning/machinelearning.component';
import { PreservationComponent } from './preservation/preservation.component';
import * as blog from './blog/blog.bloglist';
import * as dataanalysis from './dataanalysis/dataanalysis.projects';

const baseRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cuppak', component: CuppakComponent },
  { path: 'verdure', component: VerdureComponent },
  { path: 'baconsarnie', component: BaconsarnieComponent },
  { path: 'info', component: InfoComponent },
  { path: 'blog', component: BlogComponent, children: blog.blogRoutes },
  { path: 'community', component: CommunityComponent },
  { path: 'cybernetics', component: CyberneticsComponent },
  { path: 'dataanalysis', component: DataanalysisComponent, children: dataanalysis.projectRoutes },
  { path: 'games', component: GamesComponent },
  { path: 'machinelearning', component: MachinelearningComponent },
  { path: 'preservation', component: PreservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(baseRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
