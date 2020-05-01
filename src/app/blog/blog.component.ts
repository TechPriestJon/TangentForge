import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import * as blog from './blog.bloglist';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  blogList: Routes = blog.blogRoutes;
  latestBlog: string = this.blogList[this.blogList.length - 1].path;


  constructor() { }

  ngOnInit() {
  }

}
