import { TextAlignType } from '../../enum/text-align-enum'

export interface W2flyTitle {
  title: string;
  subtitle: string;
  hasSeparator?: boolean;
  textAlign?: TextAlignType;
  titleColor?: string;
  subtitleColor?: string;
}
