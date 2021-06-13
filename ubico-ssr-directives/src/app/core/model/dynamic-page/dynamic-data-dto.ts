export interface FieldsComponent {
  field: any;
  typeComponent: string;
  information: string;
  enabledComponent: boolean;
  fullWidth?: boolean;
  [key: string]: any;
}

export interface SectionsDynamic {
  anchor: string;
  fields: FieldsComponent[];
  enabledComponent: boolean;
  containerPosition: 'right' | 'left';
  brand: string;
  typeSection: string;
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
