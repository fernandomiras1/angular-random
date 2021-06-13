export interface Icon {
  icon: string;
  url: string;
}

export interface SubItem {
  name: string;
  url: string;
}
interface Legal {
  title: string;
  url: string;
}

export interface Logo {
  image: string;
  altText: string;
}

export interface Item {
  subItems: SubItem[];
  name: string;
  icons?: Icon[];
}

export interface FooterDto {
  copyright: string;
  info1?: string;
  info2?: string;
  legal: Legal[];
  logos: Logo[];
  items: Item[];
}
