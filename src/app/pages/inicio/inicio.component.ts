import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful/contentful.service';
import { Entry } from 'contentful';
import { Blogs } from 'src/app/interfaces/blogs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  blogs: Entry<Blogs>[] = [];

  constructor(private contentfulService: ContentfulService) {}

  getBlogs() {
    this.contentfulService.getBlogs().then((res) => {
      this.blogs = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.getBlogs();
  }
}
