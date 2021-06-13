export interface LinksI {
  next: boolean;
  prev: boolean;
}

export interface PostsI {
  author: null;
  categories: any[];
  image: string;
  introduction: string;
  link: string;
  postDate: string;
  title: string;
  id: string;
}

export interface NewsResponse {
  links: LinksI;
  posts: PostsI[];
}

export interface RatingsI {
  average: number;
  votes: number;
}

export interface DocumentsI {
  urlDoc: string;
  textDownload: string;
}

export interface CategorieI {
  code: string;
  name: string;
}

export interface ImagesI {
  alternative: string;
  type: string;
  image: any;
}
export interface AuthorI {
  image: string;
  name: string;
}

export interface NewsByIdResponse {
  author: AuthorI;
  categories: CategorieI[];
  images: ImagesI[];
  introduction: string;
  description: string;
  documents: DocumentsI[];
  link: string;
  postDate: string;
  title: string;
  ratings: RatingsI;
  relatedPrograms: any[];
  videos: any[];
}
