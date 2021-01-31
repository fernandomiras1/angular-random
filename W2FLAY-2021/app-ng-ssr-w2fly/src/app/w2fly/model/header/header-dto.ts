export interface HeaderDto {
  name: string;
  icon: string;
  url: string;
  subMenu: SubMenuHeader[];
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
