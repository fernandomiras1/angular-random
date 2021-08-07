import { FloatMenuType } from '../../enum/common-enum'

export interface HeaderDto {
  name: string;
  type: FloatMenuType;
  url: string;
  subMenu: SubMenuHeader[];
  icon?: string;
  title?: string;
}
export interface SubMenuHeader {
  steps: string;
  options: OptionsHeaderI[];
}

export interface OptionsHeaderI {
  name: string;
  icon: string;
  url: string;
}
