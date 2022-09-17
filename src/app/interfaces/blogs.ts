import { Entry } from 'contentful';
import { imageFile } from './contentful/imageFile';

type heroImage = {
  description: string;
  file: imageFile;
  title: string;
};

export interface Blogs {
  title: string;
  description: string;
  body: string;
  slug: string;
  heroImage: Entry<heroImage>
  publishDate: string;
  tags: string[];
}
