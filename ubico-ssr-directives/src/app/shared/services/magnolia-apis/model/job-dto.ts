import { CategorieI } from './news-dto'

export interface JobDto {
  id: string;
  title: string;
  link: string;
  categories: CategorieI[];
  date: string;
}
