import { Component } from '@angular/core';
import { PaidMediaComponentBase } from '../common/base';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavigationService } from '../../../shared/services/navigation.service';
import { IPaidMediaPromotions } from '../../../features/promotions/store/paid-media-promotions.reducer';
import { TranslateService } from '@ngx-translate/core';
import { IEmptyStateData } from '@shared/components/common/empty-state-grid/empty-state.model';

@Component({
  selector: 'app-featured',
  templateUrl: './paid-media.component.html',
  styleUrls: ['./paid-media.component.scss'],
})

export class PaidMediaComponent extends PaidMediaComponentBase {

  constructor(
    protected navigationService: NavigationService,
    protected route: ActivatedRoute,
    protected router: Router,
    protected store: Store<IPaidMediaPromotions>,
    protected translate: TranslateService,
  ) {
    super(navigationService, route, store, router);
  }

  public emptyStateData: IEmptyStateData = {
    emptyBtn: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.BTN'),
    emptySubtitle: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.SUBTITLE'),
    emptyTitle: this.translate.instant('SHARED_COMPONENTS.UNAVAILABLE_STATE.TITLE'),
    emptyIcon: 'UNAVAILABLE_ICON_URL',
  };
}
