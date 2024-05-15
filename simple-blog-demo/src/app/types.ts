import { Document } from '@contentful/rich-text-types';

export type BlogItem = {
  fields: {
    title: string;
    slug: string;
    date: Date;
    content: Document;
  }
}

export type ContentField = {
  nodeType: string;
  data: any;
  content: ContentField | ContentArray;
}
export type ContentArray = {
  nodeType: string;
  data: any;
  content: ContentField[] | ContentField;
}

export type BlogEntry = {
  title: string;
  slug: string;
  date: Date;
  content: ContentField | ContentArray[];
};

export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
  items: BlogItems;
}

export type BlogPageProps = {
  params: {
    slug: string;
  };
};



