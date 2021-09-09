import { TextAlignType } from '../enum/text-align-enum'
import { SizeColumnsEnum } from '../enum/size-enum'

export interface ImageDto {
  image: string;

  altText: string;

  title: string;

  borderRadiusStyle: string;

  align: TextAlignType;

  size: SizeColumnsEnum;
}
