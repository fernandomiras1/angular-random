import { ButtonSize } from '../../enum/button-enums'

export interface ButtonConfig {
  styleClassButton?: string | '';
  size?: ButtonSize.LARGE | ButtonSize.MEDIUM | ButtonSize.SMALL;
  icon?: string | '';
  color?: 'primary' | 'secondary';
}
