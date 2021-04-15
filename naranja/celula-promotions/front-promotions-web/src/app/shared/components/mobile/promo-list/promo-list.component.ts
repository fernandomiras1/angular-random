import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPromo } from '../../../../core/models/promo.model';
import { defaults } from '../../../../constants/default-elements';
import { NavigatorService } from '@core/utils/services/navigator.service';

@Component({
  selector: 'app-promo-list-mobile',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss'],
})
export class PromoListMobileComponent {
  @Input() showOpenFilterButton = true;
  @Input() isLastPage = false;
  @Input() loading = true;
  @Input() promos: IPromo[];
  @Input() promosRendered: IPromo[] = [];
  @Input() filterIcon = defaults.FILTER_ICON_URL;
  @Input() analitycsCreativeClass: string;
  @Output() loadMorePromotionsRequested = new EventEmitter();
  @Output() showFilter = new EventEmitter();
  isBrowser: boolean;
  public indexShowPromoMobile = 4;

  constructor(private navigatorService: NavigatorService) {
    this.isBrowser = this.navigatorService.isBrowser;
  }

  openFilterDialog() {
    this.showFilter.emit();
  }

  onLoadMorePromotions() {
    this.loadMorePromotionsRequested.next();
  }

}
