import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { defaults } from '@app/constants/default-elements';
import { IBussinesRule } from '@app/core/models/bussines-rules.model';
import { IPromo } from '@app/core/models/promo.model';
import { ITag } from '@app/core/models/tag.model';
import { NavigatorService } from '@app/core/utils/services/navigator.service';
import { PromotionsService } from '@app/features/promotions/services/promotions.service';
import { ImagesUtils } from '@app/shared/utils/images.utils';
import { environment } from '@environments/environment';
import { DateTime } from 'luxon';

export abstract class CardWithTagComponentBase {
  @Input() promo: IPromo;
  @Input() index: number;
  @Input() analitycsCreativeClass: string;
  @Input() rule: IBussinesRule;

  constructor(
    protected router: Router,
    protected promoService: PromotionsService,
    protected navigatorService: NavigatorService) {
  }
  public title: string;
  public subtitle: string;
  public categoryIcon: string;
  public emptyIcon: string;
  public logoUrl: string;
  public defaultLogo = defaults.DEFAULT_LOGO_URL;
  public counterData: any;
  public favIcon = defaults.FAV_ICON;
  public tag: ITag = null;

  setTitle(promo: IPromo) {
    if (promo.giftDiscount.code === '2') {
      this.title = `${promo.plan.mainShortName || promo.plan.description}`;
      this.subtitle = `${promo.plan.secondaryShortName || ''} en ${promo.commerceName}`;
      return;
    }

    if (promo.giftDiscount.code === '3') {
      this.title = `${promo.plan.mainShortName || promo.plan.description}`;
      this.subtitle = `${promo.giftDiscount.mainShortName || promo.giftDiscount.description} en ${promo.commerceName}`;
      return;
    }

    if (promo.giftDiscount.code !== '1') {
      this.title = promo.giftDiscount.mainShortName || promo.giftDiscount.description || '';
      this.subtitle = `${promo.plan.mainShortName || promo.plan.description} en ${promo.commerceName}`;
    } else {
      this.title = promo.plan.mainShortName || promo.plan.description;
      this.subtitle = '';
    }
  }

  setIcon(category: string) {
    const iconName = ImagesUtils.generateName(category, '-');

    this.categoryIcon = `assets/images/icons/categories/${iconName}.svg`;
    this.emptyIcon = `assets/images/icons/categories/${iconName}-empty.svg`;
  }

  setLogo(localName: string) {
    const logoName = ImagesUtils.generateName(localName, '_');
    this.logoUrl = `${environment.endpoints.BASE_URL_LOGO}/${logoName}.webp`;
  }

  getCounterData() {
    this.counterData = this.promoService.getDaysCounter(this.promo);
  }

  goDetail() {
    this.router.navigate(['promo', this.promo.id,
      this.navigatorService.gtmUrlResolve(this.promo)]);
  }

  setTag(tags: ITag[]) {
    const result = tags.filter(tag => tag.type && tag.type.toLowerCase() === 'specials'
      && tag.active && tag.visible)
      .sort((a, b) => a.tag.localeCompare(b.tag));

    if (result.length > 0) {
      const firstTag: ITag = result[0];

      const from = firstTag.dateFrom ? DateTime.fromFormat(firstTag.dateFrom, 'dd/MM/yyyy') : null;
      const to = firstTag.dateTo ? DateTime.fromFormat(firstTag.dateTo, 'dd/MM/yyyy') : null;

      if (from && to && Date.now() >= from.ts && Date.now() <= to.ts) {
        this.tag = result[0];
      }
    }
  }

}
