import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

import { CONFIG } from 'contentful.conf';
import { Blogs } from 'src/app/interfaces/blogs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  getBlogs(query?: object): Promise<Entry<Blogs>[]> {
    return this.cdaClient
      .getEntries<Blogs>(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.blogs,
          },
          query
        )
      )
      .then((res) => res.items);
  }
}
