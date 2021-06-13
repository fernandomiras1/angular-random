import { TextAlignType } from '../../enum/text-align-enum'

export interface W2mTitle {
  title: string;
  subtitle: string;
  hasSeparator?: boolean;
  textAlign?: TextAlignType;
  titleColor?: string;
  subtitleColor?: string;
}
