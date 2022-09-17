import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entry } from 'contentful';
import { Blogs } from 'src/app/interfaces/blogs';
import { ContentfulService } from 'src/app/services/contentful/contentful.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
})
export class BlogComponent implements OnInit {
  loading: boolean = true;
  blog: Entry<Blogs> | undefined = undefined;

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
  ) {}

  getBlogs() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return;
    this.contentfulService.getBlogs({ 'fields.slug': slug }).then((res) => {
      this.blog = res[0];
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getBlogs();
  }
}
