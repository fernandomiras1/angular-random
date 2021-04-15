import { IFeaturedPromo } from '../../models/featured-promotion.model';
import { IPromo } from '../../models/promo.model';

export interface FeaturedNavigationData {
  promos: IPromo[];
  promosRendered: IPromo[];
  selectedFeaturedPromotion: IFeaturedPromo;
}
