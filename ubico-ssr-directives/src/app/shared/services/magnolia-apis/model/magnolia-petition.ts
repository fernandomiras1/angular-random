import { CategoryFilterType } from './category-filter-type'

export interface MagnoliaPetition{
  lang: string;
  highlighted?: boolean;
  home?: boolean;
  bestRated?: boolean;
  brand?: string;
  imagingVariation?: string;
  offer?: boolean;
  page?: number;
  elem?: number;
  viewInactives?: boolean;
  categories?: string[];
  path?: string;
  categoryTags?: string[];
  destinations?: string[];
  categoryFilterType?: CategoryFilterType;
}
