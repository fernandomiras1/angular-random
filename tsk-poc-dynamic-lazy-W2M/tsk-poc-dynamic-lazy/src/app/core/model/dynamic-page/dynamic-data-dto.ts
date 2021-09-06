import { BorderRadiusStyleI } from '../styles/border-radius-style'

export interface FieldsComponent {
  field: any;
  typeComponent: string;
  information: string;
  enabledComponent: boolean;
  borderRadius?: BorderRadiusStyleI;
  borderRadiusStyle?: string;
  fullWidth?: boolean;
  [key: string]: any;
}

export interface SectionsDynamic {
  fields: FieldsComponent[];
  anchor: string;
  enabledComponent: boolean;
  fullwidth: boolean;
  typeSection: string;
  typeHero: string;
  backgroundColor: boolean;
  [key: string]: any;

}

export interface PageDynamic {
  content: SectionsDynamic[];
  canonical: string;
  description: string;
  keywords: string[];
  redirects: string[];
  pageId: string;
  title: string;
  url: string;
  urlSeo: string;
  [key: string]: any;
}

export interface MagnoliaResponse {
  data: PageDynamic;
  page: string;
}
