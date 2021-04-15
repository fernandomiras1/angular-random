import { OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import { IPromo } from '../../../core/models/promo.model';
import { NavigationService } from '../../../shared/services/navigation.service';
import { IPaidMediaPromotions } from '../../../features/promotions/store/paid-media-promotions.reducer';
import * as fromActionsPaidMediaPromotions from '../../../features/promotions/store/paid-media-promotions.actions';
import * as fromSelectorPaidMediaPromotions from '../../../features/promotions/store/paid-media-promotions.selectors';

export class PaidMediaComponentBase implements OnInit, OnDestroy {

  protected subscriptions: Subscription[] = [];

  public individualPromo: IPromo = null;
  public agrupatedPromos: IPromo[] = [];
  public agrupatedPromosRendered: IPromo[] = [];
  public loading = true;
  public error = false;
  public analyticsClass = 'paidmedia';

  constructor(
    protected navigationService: NavigationService,
    protected route: ActivatedRoute,
    protected store: Store<IPaidMediaPromotions>,
    protected router: Router,
  ) {
  }

  ngOnInit() {
    this.mapState();
  }

  mapState() {
    this.dispatchActions();

    this.store
      .pipe(select(fromSelectorPaidMediaPromotions.selectPaidMediaPromotionsData))
      .pipe(filter(val => !!val))
      .pipe(take(1))
      .subscribe(
        (promos) => {
          if (promos.data) {
            if (promos.data.length > 1) {
              this.agrupatedPromos = promos.data;
              this.getPaginatedPromos(8);
            } else if (promos.data.length === 1) {
              this.individualPromo = promos.data[0];
            }

            this.loading = false;
          }
          if (promos.error) {
            this.loading = false;
            this.error = true;
          }
        });
  }

  dispatchActions() {
    const promoId = btoa(this.route.snapshot.params.paidMediaData);

    const body = {
      aspect: {
        code: 'MEDIA',
        media: promoId,
      },
      payload: {},
    };

    this.store.dispatch(new fromActionsPaidMediaPromotions.FetchPending(body));
  }

  onScroll() {
    this.loading = true;
    this.getPaginatedPromos(8);
  }

  retry() {
    this.error = false;
    this.loading = true;
    this.mapState();
  }

  getPaginatedPromos(size: number) {
    this.agrupatedPromosRendered = [
      ...this.agrupatedPromosRendered,
      ...this.agrupatedPromos.splice(0, size),
    ];
    this.loading = false;
  }

  goBack() {
    this.navigationService.goBack();
  }

  ngOnDestroy() {
    this.store.dispatch(new fromActionsPaidMediaPromotions.ClearData());
  }

  onErrorStateButtonPressed(): void {
    this.router.navigate(['']);
  }
}
