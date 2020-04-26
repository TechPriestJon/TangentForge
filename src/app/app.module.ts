import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { CuppakComponent } from './cuppak/cuppak.component';
import { MainComponent } from './main/main.component';
import { VerdureComponent } from './verdure/verdure.component';

@NgModule({
  declarations: [
    AppComponent,
    CuppakComponent,
    MainComponent,
    VerdureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
