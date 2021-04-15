import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as fromActionsPromotion from '../../../features/promotions/store/promotion.actions';
import * as fromSelectorPromotion from '../../../features/promotions/store/promotion.selectors';
import { IPromo } from '../../../core/models/promo.model';
import { IPromotion } from '../../../features/promotions/store/promotion.reducer';
import { NavigationService } from '../../../shared/services/navigation.service';

export class PromoDetailComponentBase implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public promo: IPromo = null;
  public promoId: string = null;
  public loading = true;
  public error = false;
  public isMobile = true;
  public showPromoDates = false;
  public isOnline: boolean;
  public showMore: boolean;

  constructor(
    protected route: ActivatedRoute,
    protected store: Store<IPromotion>,
    protected navigationService: NavigationService,
  ) {
  }

  ngOnInit() {
    this.promoId = this.route.snapshot.params.id;
    this.mapState();
    document.documentElement.scrollTop = 0;
  }

  mapState() {
    this.dispatchActions();
    this.subscriptions.push(
      this.store
        .pipe(select(fromSelectorPromotion.selectData))
        .pipe(
          filter(val => !!val),
        ).subscribe(
          (promo) => {
            if (promo.data) {
              this.promo = promo.data.data[0];
            }
            if (promo.error) {
              this.error = true;
            }

            this.loading = false;
          },
        ),
    );
  }

  dispatchActions() {
    this.store.dispatch(new fromActionsPromotion.FetchPending({ id: this.promoId }));
  }

  retry() {
    this.error = false;
    this.loading = true;
    this.mapState();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
    this.store.dispatch(new fromActionsPromotion.ClearData());
  }
}
