import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
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
import { B20200428Component } from './blog/b20200428/b20200428.component';
import { DataAnalysisMainComponent } from './dataanalysis/main/dataanalysis-main.component';
import { HttpClientModule } from '@angular/common/http';
import { B20200506Component } from './blog/b20200506/b20200506.component';

@NgModule({
  declarations: [
    AppComponent,
    CuppakComponent,
    MainComponent,
    VerdureComponent,
    BaconsarnieComponent,
    InfoComponent,
    BlogComponent,
    CommunityComponent,
    CyberneticsComponent,
    DataanalysisComponent,
    GamesComponent,
    MachinelearningComponent,
    PreservationComponent,
    B20200428Component,
    DataAnalysisMainComponent,
    B20200506Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
