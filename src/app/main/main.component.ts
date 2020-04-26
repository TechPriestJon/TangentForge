import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() { }

  imgSrc = 'assets/cogspin.png';
  imgAltText = 'spinning cog';
  buttonImg = false;
  url = 'cuppak';
  urlActive = 'inactive';

  setCentralImage(img: string): void{
    this.imgSrc = 'assets/' + img + 'icon.png';
    this.imgAltText = 'spinning ' + img + ' icon';
    this.buttonImg = true;
    this.url = '/' + img;
    this.urlActive = 'active';
  }

  ngOnInit() {
  }

}
