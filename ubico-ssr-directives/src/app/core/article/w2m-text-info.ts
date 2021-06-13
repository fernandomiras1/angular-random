import { OrientationEnum } from '../enum/orientation-enum'
import { W2mTitle } from '../model/titles/w2m-title'

export interface W2mTextInfo extends W2mTitle {
  hasSeparator: boolean;
  orientation: OrientationEnum;
  subtitle: string;
  title: string;
  position: string;
  style: string;
  externalLinkIcon: boolean;
  smallTitle: string;
  textButton?: string;
  urlButton?: string;
  icon?: string;
}
