import { Tag } from './tag'

export interface Card {
  title: string;
  content: string;
  urlImage: string;
  titleImage: string;
  descriptionImage: string;
  generalTags: Tag[];
  categoryTags: Tag[];
  imageZoom: boolean;
}
