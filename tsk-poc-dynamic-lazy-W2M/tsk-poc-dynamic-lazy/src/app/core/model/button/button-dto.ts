import { BaseDto } from '../base-dto'

export interface ButtonDto extends BaseDto {
  urlButton: string;
  componentModal: string;
  formPage: string;
  textGDPR: string;
  textButton: string;
  icon: string;
  externalLinkIcon: boolean | false;
}
