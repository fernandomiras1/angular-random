import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { GeocodingService } from '@shared/services/geocoding.service';
import { NGZDialogService } from '@zumo/core/components/dialog';
import { ZumoSnackbarService } from '@zumo/zumo-snackbar';

import { NavigationState } from '../../../core/navigation/store/navigation.reducer';
import { IPromotions } from '../../../features/promotions/store/promotions-filtered.reducer';
import { AddressesService } from '../../../shared/services/addresses.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { MapNearYouBase } from '../common/base';

@Component({
  selector: 'app-map-near-you',
  templateUrl: './map-near-you.component.html',
  styleUrls: ['./map-near-you.component.scss'],
})

export class MapNearYouComponent extends MapNearYouBase {
  constructor(
    protected store: Store<IPromotions>,
    protected addressesService: AddressesService,
    protected navigationStore: Store<NavigationState>,
    protected navigationService: NavigationService,
    protected snackbarService: ZumoSnackbarService,
    protected translate: TranslateService,
    protected titlecasePipe: TitleCasePipe,
    protected geocodingService: GeocodingService,
    protected dialogService: NGZDialogService,
  ) {
    // tslint:disable-next-line: max-line-length
    super(store, addressesService, navigationStore, navigationService, snackbarService, translate, titlecasePipe, geocodingService, dialogService);

    // this.subscriptions.push(
    //   this.snackbarSubject.asObservable()
    //     .subscribe((event) => {
    //       if (event) { this.openFilterDialog(); }
    //     }));

    this.subscriptions.push(
      this.snackbarSubject.asObservable()
        .subscribe(() => this.openFilterDialog()));
  }
}
