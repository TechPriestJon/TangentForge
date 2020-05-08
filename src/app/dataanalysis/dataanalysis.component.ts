import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import * as projects from './dataanalysis.projects';

@Component({
  selector: 'app-dataanalysis',
  templateUrl: './dataanalysis.component.html',
  styleUrls: ['./dataanalysis.component.sass']
})
export class DataanalysisComponent implements OnInit {

  constructor(   ) { }

  projectRoutes: Routes = projects.projectRoutes.filter(project => project.path != '');

  private testblock = {};

  ngOnInit() {  }

}
