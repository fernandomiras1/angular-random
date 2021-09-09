import { Info } from '../info/info'

export interface ExpansionContentDto {
  title: string;
  text: string;
  image?: string;
  altText?: string;
  borderRadius?: string;
  dotColor?: string;
  fields?: Info[];
}
