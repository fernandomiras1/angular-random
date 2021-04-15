import { IPromo } from '@app/core/models/promo.model';

import { environment } from '../../../environments/environment';
import { ImagesUtils } from './images.utils';

export class PromotionsUtils {
  static setTitle(mainPlan: string) {
    let subtitle;
    if (mainPlan.includes(',')) { subtitle = mainPlan.split(',')[1]; }
    const title = mainPlan.split(',')[0].split(' en ')[0];
    return { title, subtitle };
  }

  static setTitleFromPromo(promo: IPromo) {
    if (promo.giftDiscount.code !== '1') {
      return {
        title: `${promo.giftDiscount.description}`,
        subtitle: promo.plan.description,
      };
    }
    return {
      title: `${promo.plan.description}`,
      subitle: '',
    };
  }

  static setLogo(localName: string) {
    const logoName = ImagesUtils.generateName(localName, '_');

    return `${environment.endpoints.BASE_URL_LOGO}/${logoName}.webp`;
  }

  setIcon(category: string) {
    const iconName = ImagesUtils.generateName(category, '-');

    return `assets/images/icons/categories/${iconName}.svg`;
  }
}
