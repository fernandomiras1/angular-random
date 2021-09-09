import { ColorsEnum } from '../../enum/colors-enum'
import { AlertTypeEnum } from '../../enum/alert-type-enum'

export interface AlertCommonDto {
  alertType: AlertTypeEnum;
  altText?: string;
  textButton?: string;
  urlButton?: string;
  externalLinkIcon: boolean | false;
  dotColor?: ColorsEnum;
  image?: string;
  text: string;
  title: string;
}
