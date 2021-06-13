export interface SubMenuHeaderOption {
  name: string;
  url: string;
  externalLinkIcon: boolean;
}

export interface ButtonHeader {
  textButton: string;
  urlType: string;
  urlButton: string;
  iconButton: string;
}

export interface HeaderIcon {
  icon: string;
  name: string;
  url: string;
}

export interface SubMenuHeader {
  steps: string;
  url: string;
  options: SubMenuHeaderOption[];
}

export interface ItemHeader {
  url: string;
  headerName: string;
  subMenu: SubMenuHeader[];
}

export interface HeaderDto {
  button: ButtonHeader;
  copyright: string;
  links: string[];
  icons: HeaderIcon[];
  items: ItemHeader[];
}
