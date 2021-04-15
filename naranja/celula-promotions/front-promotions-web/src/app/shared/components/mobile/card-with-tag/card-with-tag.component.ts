import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigatorService } from '@app/core/utils/services/navigator.service';
import { PromotionsService } from '@app/features/promotions/services/promotions.service';

import { CardWithTagComponentBase } from '../../common/card-with-tag/base';

@Component({
  selector: 'app-card-with-tag-mobile',
  templateUrl: './card-with-tag.component.html',
  styleUrls: ['./card-with-tag.component.scss'],
})
export class CardWithTagMobileComponent extends CardWithTagComponentBase implements OnInit {

  constructor(
    protected router: Router,
    protected promoService: PromotionsService,
    protected navigatorService: NavigatorService) {
    super(router, promoService, navigatorService);
  }

  ngOnInit() {
    this.setTitle(this.promo);
    this.setIcon(this.promo.sector.category);
    this.setLogo(this.promo.commerceName);
    this.setTag(this.promo.tags);
    this.getCounterData();
  }
}
