import { AlertDto } from '../alert/alert-dto'
import { BaseDto } from '../base-dto'
import { Image } from '../image/image'

export interface Hero extends BaseDto{
  image: Image;
  title: string;
  subtitle: string;
  data: AlertDto[];
}
