import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Blogs } from 'src/app/interfaces/blogs';
import { ContentfulService } from 'src/app/services/contentful/contentful.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs: Entry<Blogs>[] = [];

  constructor(private contentfulService: ContentfulService) {}

  getBlogs() {
    this.contentfulService.getBlogs().then((res) => {
      this.blogs = res;
      // console.log(res);
    });
  }

  ngOnInit(): void {
    this.getBlogs();
  }
}
