import { AlertTypeEnum } from '../../enum/alert-type-enum'

export interface AlertDto {
  title: string;
  dot?: boolean;
  link: string;
  urlAlert: string;
  typeAlert: AlertTypeEnum;
}
