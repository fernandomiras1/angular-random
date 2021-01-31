export interface DataFooter {
  name: string;
  subItems: SubItem[];
  icons?: SubItem[];
}

export interface SubItem {
  name: string;
  url: string;
}
