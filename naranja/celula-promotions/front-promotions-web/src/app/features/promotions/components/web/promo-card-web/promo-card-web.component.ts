import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITag } from '@app/core/models/tag.model';
import { DateTime } from 'luxon';

import { environment } from '../../../../../../environments/environment';
import { defaults } from '../../../../../constants/default-elements';
import { IPromo } from '../../../../../core/models/promo.model';
import { NavigatorService } from '../../../../../core/utils/services/navigator.service';
import { ImagesUtils } from '../../../../../shared/utils/images.utils';
import { PromotionsService } from '../../../services/promotions.service';

@Component({
  selector: 'app-promo-card-web',
  templateUrl: './promo-card-web.component.html',
  styleUrls: ['./promo-card-web.component.scss'],
})
export class PromoCardWebComponent implements OnInit {

  @Input() promo: IPromo;
  @Input() index: number;

  constructor(
    private router: Router,
    private promoService: PromotionsService,
    private navigatorService: NavigatorService) { }

  public subtitle: string;
  public title: string;
  public categoryIcon: string;
  public emptyIcon: string;
  public logoUrl: string;
  public defaultLogo = defaults.DEFAULT_LOGO_URL;
  public counterData: any;
  public tag: ITag = null;

  ngOnInit() {
    this.setTitle(this.promo);
    this.setIcon(this.promo.sector.category);
    this.setLogo(this.promo.commerceName);
    this.setTag(this.promo.tags);
    this.getCounterData();
  }

  setTitle(promo: IPromo) {
    if (promo.giftDiscount.code !== '1') {
      this.title = promo.giftDiscount.description || '';
      this.subtitle = promo.plan.description;
    } else {
      this.title = promo.plan.description;
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
      && tag.active && tag.visible && !tag.internal)
      .sort((a, b) => a.tag.localeCompare(b.tag));

    if (result.length > 0) {
      const firstTag: any = result[0];

      const from = DateTime.fromFormat(firstTag.dateFrom, 'dd/MM/yyyy');
      const to = DateTime.fromFormat(firstTag.dateTo, 'dd/MM/yyyy');

      if (from && to && Date.now() >= from && Date.now() <= to) {
        this.tag = result[0];
      }
    }
  }
}
