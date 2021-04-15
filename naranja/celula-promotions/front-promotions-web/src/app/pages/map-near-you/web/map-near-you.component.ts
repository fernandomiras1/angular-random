import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { GeocodingService } from '@shared/services/geocoding.service';
import { NGZDialogService } from '@zumo/core/components/dialog';
import { ZumoSnackbarService } from '@zumo/zumo-snackbar';

import { NavigationState } from '../../../core/navigation/store/navigation.reducer';
import { DocumentService } from '../../../core/utils/services/document.service';
import { IPromotions } from '../../../features/promotions/store/promotions-filtered.reducer';
import { AddressesService } from '../../../shared/services/addresses.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { MapNearYouBase } from '../common/base';

@Component({
  selector: 'app-map-near-you-web',
  templateUrl: './map-near-you.component.html',
  styleUrls: ['./map-near-you.component.scss'],
})

export class MapNearYouWebComponent extends MapNearYouBase {
  constructor(
    protected store: Store<IPromotions>,
    protected addressesService: AddressesService,
    protected router: Router,
    private documentService: DocumentService,
    protected navigationStore: Store<NavigationState>,
    protected navigationService: NavigationService,
    protected snackbarService: ZumoSnackbarService,
    protected translate: TranslateService,
    protected titlecasePipe: TitleCasePipe,
    protected geocodingService: GeocodingService,
    protected dialogService: NGZDialogService,
  ) {
    super(
      store, addressesService, navigationStore, navigationService,
      snackbarService, translate, titlecasePipe, geocodingService, dialogService);

    // this.subscriptions.push(
    //   this.snackbarSubject.asObservable()
    //     .subscribe((event) => {
    //       if (event) { this.showFilters(); }
    //     }));

    this.subscriptions.push(
      this.snackbarSubject.asObservable()
        .subscribe(() => this.showFilters()));
  }

  public showFiltersMenu = false;
  switch = { text: 'Vista en mapa', selected: true, disabled: false };

  redirectToAll() {
    localStorage.removeItem('NfromDetailToMap');
    setTimeout(
      () => {
        this.router.navigate(['/todas']);
      },
      500);
  }

  showFilters() {
    this.showFiltersMenu = true;
    this.changeStyleBodyFixed('add');
  }

  changeStyleBodyFixed(action: string): void {
    const body = this.documentService.nativeDocument.getElementsByTagName('body')[0];
    body.classList[action]('body-fixed');
  }

  setFiltersValue(value) {
    this.showFiltersMenu = value;
    this.changeStyleBodyFixed('remove');
  }

  applyFilterMap(event) {
    this.changeStyleBodyFixed('remove');
    this.showFiltersMenu = false;
    this.onFilterAppliedWithoutLocation(event);
  }
}
