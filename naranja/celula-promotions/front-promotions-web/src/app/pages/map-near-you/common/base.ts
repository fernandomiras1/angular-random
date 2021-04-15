import { TitleCasePipe } from '@angular/common';
import { OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { GeocodingService } from '@shared/services/geocoding.service';
import { IDialogData, NGZDialogService } from '@zumo/core/components/dialog';
import { IZumoSnackbarData, ZumoSnackbarService } from '@zumo/zumo-snackbar';
import { Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import {
  calculatorText,
  clusterStyles,
  getIcon,
  mapImageSrc,
  mapStyles,
  zoomLevelToKM,
  zoomLevelToMeters,
} from '../../../constants/maps.constants';
import { IFilterBody } from '../../../core/models/filter-body.model';
import { IGeoLocation, IGeoLocationAddress, ILocation } from '../../../core/models/geo-location.model';
import { IPromo } from '../../../core/models/promo.model';
import { MapNearYouNavigationData } from '../../../core/navigation/models/map-near-you.model';
import { NavigationMetaData } from '../../../core/navigation/models/navigation.model';
import * as fromActionsNavigation from '../../../core/navigation/store/navigation.actions';
import { NavigationState } from '../../../core/navigation/store/navigation.reducer';
import * as fromSelectorNavigation from '../../../core/navigation/store/navigation.selectors';
import * as fromSelectorByLocationPromotions from '../../../features/promotions/store/by-location-promotion.selectors';
import * as fromByLocationPromotionsActions from '../../../features/promotions/store/by-location-promotions.actions';
import { IPromotions } from '../../../features/promotions/store/promotions.reducer';
import { AddressesService } from '../../../shared/services/addresses.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { PromotionsUtils } from '../../../shared/utils/promotions.utils';

export abstract class MapNearYouBase implements OnDestroy {
  lat: number;
  lng: number;
  outOfBounds: boolean;
  showLabels = true;
  loading = true;
  isLoading = false;
  applyFilter = false;
  currentZoom = 15;
  minZoom = 8;
  maxZoom = 19;
  currentLocality: any = {};
  currentProvince: any = {};
  public isEnableGeolocation = true;
  public showFilterWithoutLocation = false;
  public promos: IPromo[] = [];
  public markers: any[] = [];
  public markersFiltered: any[] = [];
  public subscriptions: Subscription[] = [];
  protected snackbarSubject: Subject<any> = new Subject();
  mapStyles = mapStyles;
  imgSrc = mapImageSrc;
  clusterStyles = clusterStyles;
  calculator = calculatorText;
  currentPoint: IGeoLocation = {
    lat: 0,
    lng: 0,
  };
  centerPoint: IGeoLocation = {
    lat: 0,
    lng: 0,
  };
  initialPoint: IGeoLocation = {
    lat: 0,
    lng: 0,
  };
  actualPosition: IGeoLocation = {
    lat: 0,
    lng: 0,
  };
  public openFilter = false;
  public categoriesFilteredItems: any[] = [];
  public commerceNameFiltered: string = null;
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
    this.checkNavigationData();
  }

  checkNavigationData() {
    this.subscriptions.push(this.navigationStore
      .pipe(select(fromSelectorNavigation.selectData))
      .pipe(take(1))
      .pipe(filter(val => !!val)).subscribe(
        (data) => {
          const componentData = data.history['MapNearYouComponent'];
          const location = localStorage.getItem('NpromoGeolocation');
          const fromDetail = localStorage.getItem('NfromDetailToMap');
          if (componentData && !location) {
            if (fromDetail) {
              this.setFromStore(componentData);
            } else {
              navigator.geolocation.getCurrentPosition(
                (pos) => {
                  if (pos.coords.latitude === componentData.componentData.actualPosition.lat
                    && pos.coords.longitude === componentData.componentData.actualPosition.lng) {
                    this.setFromStore(componentData);
                  } else {
                    this.getCurrentPosition();
                  }
                },
                () => {
                  this.isEnableGeolocation = false;
                  this.showFilterWithoutLocation = true;
                  this.openFilter = true;
                  this.loading = false;
                  this.saveNavigationData();
                },
                { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true });
            }
          } else {
            if (!componentData && location) {
              this.getCurrentPosition();
            } else {
              if (componentData && location) {
                if (fromDetail) {
                  this.setFromStore(componentData);
                } else {
                  navigator.geolocation.getCurrentPosition(
                  (pos) => {
                    if (pos.coords.latitude === componentData.componentData.actualPosition.lat
                      && pos.coords.longitude === componentData.componentData.actualPosition.lng) {
                      this.setFromStore(componentData);
                    } else {
                      this.getCurrentPosition();
                    }
                  },
                  () => {
                    this.isEnableGeolocation = false;
                    this.showFilterWithoutLocation = true;
                    this.openFilter = true;
                    this.loading = false;
                    this.saveNavigationData();
                  },
                  { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true });
                }
              }
            }
          } if (!componentData && !location) {
            this.getCurrentPosition();
          }
          this.storeSelectors();
        }));
  }

  private setFromStore(componentData: any) {
    this.isEnableGeolocation = componentData.componentData.isEnableGeolocation;
    this.outOfBounds = componentData.componentData.outOfBounds;
    this.promos = componentData.componentData.promos;
    this.markers = componentData.componentData.markers;
    this.markersFiltered = componentData.componentData.markersFiltered;
    this.initialPoint = componentData.componentData.initialPoint;
    this.centerPoint = componentData.componentData.centerPoint;
    this.currentPoint = componentData.componentData.currentPoint;
    this.showLabels = componentData.componentData.showLabels;
    this.currentLocality = componentData.componentData.currentLocality;
    this.currentProvince = componentData.componentData.currentProvince;
    this.currentZoom = componentData.componentData.currentZoom;
    this.categoriesFilteredItems = componentData.componentData.categoriesFilteredItems;
    this.actualPosition = componentData.componentData.actualPosition;
    this.showFilterWithoutLocation = componentData.componentData.showFilterWithoutLocation;
    this.openFilter = componentData.componentData.openFilter;
    this.commerceNameFiltered = componentData.componentData.commerceNameFiltered;
    this.loading = false;
    this.isEnableGeolocation = componentData.componentData.isEnableGeolocation;
  }

  storeSelectors() {
    this.subscriptions.push(this.store
      .pipe(select(fromSelectorByLocationPromotions.selectByLocationPromotionsData))
      .pipe(filter(val => !!val))
      .subscribe(
        (prom) => {
          if (prom.data.length === 0 && this.markers.length === 0) { this.openDialog(this.applyFilter); }
          this.resolvePromotions(prom);
          this.loading = false;
        }));
  }

  getCurrentPosition() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.initialPoint.lat = +pos.coords.latitude;
          this.initialPoint.lng = +pos.coords.longitude;
          this.currentPoint.lng = +pos.coords.longitude;
          this.currentPoint.lat = +pos.coords.latitude;
          this.actualPosition.lng = +pos.coords.longitude;
          this.actualPosition.lat = +pos.coords.latitude;
          this.centerPoint.lng = +pos.coords.longitude;
          this.centerPoint.lat = +pos.coords.latitude;
          this.isEnableGeolocation = true;
          this.dispatchActions();
        },
        () => {
          this.isEnableGeolocation = false;
          this.showFilterWithoutLocation = true;
          this.openFilter = true;
          this.loading = false;
          this.saveNavigationData();
        },
        { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true });
    } else {
      this.isEnableGeolocation = false;
      this.showFilterWithoutLocation = true;
      this.openFilter = true;
      this.loading = false;
      this.saveNavigationData();
    }
  }

  resolvePromotions(promotions) {
    if (promotions.data && promotions.data.length) {
      this.promos = promotions.data;
      this.getMarkers();
      if (this.outOfBounds) {
        this.outOfBounds = false;
      }
    }
    this.isLoading = false;
  }

  dispatchActions() {
    const meters = zoomLevelToMeters[this.currentZoom];
    const sendData = {
      zoom: `${meters}m`,
      latitude: this.currentPoint.lat,
      longitude: this.currentPoint.lng,
    };

    if (this.categoriesFilteredItems.length) {
      sendData['categories'] = this.categoriesFilteredItems;
    }

    if (this.commerceNameFiltered && this.commerceNameFiltered.length > 0) {
      sendData['commerceName'] = this.commerceNameFiltered;
    }

    this.store.dispatch(new fromByLocationPromotionsActions.FetchPending(sendData));
  }

  /**
   * This function check if the promotions was on the array
   * and on intervals of 1 millisecond process the address for
   * get the coordinate
   */
  getMarkers() {
    if (!this.promos.length) {
      return;
    }
    if (this.markers && this.markers.length) {
      const markers = { ...this.markers };
      const promotions = { ...this.promos };
      const promotionsFiltered = Object.values(promotions).filter((o: IPromo) => {
        return !Object.values(markers).find((value) => {
          return value.promotions.find((x: IPromo) => x.id === o.id);
        });
      });
      this.promos = promotionsFiltered as IPromo[];
    }
    const prom = this.promos.slice(0, 10);
    this.promos.splice(0, 10);
    this.getAddress(prom);
    const idInterval = setInterval(
      () => {
        if (this.promos.length) {
          const newPromos = this.promos.slice(0, 10);
          this.getAddress(newPromos);
          this.promos.splice(0, 10);
        } else {
          clearInterval(idInterval);
        }
      },
      1005);
  }

  getAddress(prom: IPromo[]) {
    prom.forEach((promo) => {
      if (promo.address.length) {
        const addresses = this.addressesService.getAddresses(promo.address);
        this.processAddress(addresses, promo);
      }
    });
  }

  processAddress(gmapAddresses: IGeoLocationAddress[], promo: IPromo) {
    if (gmapAddresses.length) {
      gmapAddresses.forEach((item, index, array) => {
        this.addMarkers(item, promo);
      });
    } else {
      if (gmapAddresses[0].street.length) {
        this.addMarkers(gmapAddresses[0], promo);
      }
    }
  }

  /**
   * This function encode the promo address and get the coordinate,
   * then calculate the distance and check if the mark exists,
   * if the marker exist generate multiple promotions in same location
   * @param {Object} address.
   * @param {Object} promo.
   */
  addMarkers(address: IGeoLocationAddress, promo: IPromo) {
    const infoPlan = PromotionsUtils.setTitleFromPromo(promo);

    if (!address || !address.geoposition) {
      return false;
    }

    const distance = this.addressesService.getDistance({ lat: address.geoposition.lat, lng: address.geoposition.lng }, this.initialPoint);
    if (this.arePointsNear(address.geoposition, this.currentPoint)) {
      const markerCreated = this.markers.find(x => x.lat === address.geoposition.lat && x.lng === address.geoposition.lng);
      if (markerCreated) {
        markerCreated.promotions.push(this.getPromoDetail(promo, address, infoPlan, distance));
        markerCreated.label = `${markerCreated.promotions.length} promos`;
        markerCreated.pointer = getIcon('beneficio_multiple', false);
      } else {
        const marker = {
          label: promo.commerceName,
          lat: address.geoposition.lat,
          lng: address.geoposition.lng,
          pointer: getIcon(infoPlan.title, false),
          promotions: [this.getPromoDetail(promo, address, infoPlan, distance)],
        };
        this.markers.push(marker);
        this.markersFiltered.push(marker);
      }
    }
  }

  getPromoDetail(promo: IPromo, address: IGeoLocationAddress, infoPlan, distance: number) {
    return {
      title: this.getTitle(promo),
      subtitle: this.getSubTitle(promo),
      id: promo.id,
      street: address.street,
      distance: (distance * 1000) < 1000 ?
        `${Math.round(distance * 1000)} m` :
        `${Math.round(distance * 10) / 10} Km`,
      imgSrc: PromotionsUtils.setLogo(promo.commerceName),
      planPrincipal: infoPlan.title,
      nombreComercio: promo.commerceName,

      commerceName: promo.commerceName,
      mainPlan: promo.plan.description,
      mainGiftDiscount: promo.giftDiscount.description,
      area: promo.sector.sector,
      category: promo.sector.category,

      categoria: promo.sector.category,
    };
  }

  truncateLabel(label, isSelected) {
    return this.currentZoom >= 17 || isSelected ? label : label.substring(0, 13);
  }

  verifyPosition(latLng) {
    this.centerPoint.lng = latLng.lng;
    this.centerPoint.lat = latLng.lat;
    this.outOfBounds = !this.arePointsNear(this.centerPoint, this.currentPoint)
      && this.currentZoom >= 13;
  }

  getNewLocation() {
    this.isLoading = true;
    this.currentPoint = { ...this.centerPoint };
    this.markers = [];
    this.markersFiltered = [];
    this.dispatchActions();
  }

  manageZoom(zoom: number) {
    if (zoom > this.maxZoom) {
      this.currentZoom = this.maxZoom;
    } else {
      this.currentZoom = zoom;
    }
    this.showLabels = zoom > 15;
  }

  arePointsNear(checkPoint, centerPoint) {
    const km = zoomLevelToKM(this.currentZoom);
    return this.addressesService.getDistance(checkPoint, centerPoint) <= km;
  }

  markerSelect(marker) {
    this.currentPoint = { ...this.centerPoint };
    const anySelected = this.markersFiltered.find(x => x.isSelected); // find(this.markersFiltered, ['isSelected', true]);
    if (anySelected) {
      this.setIcon(anySelected, false);
      anySelected.isSelected = false;
    }
    this.setIcon(marker, true);
    marker.isSelected = true;
  }

  setIcon(marker, isSelected) {
    if (marker.promotions.length > 1) {
      marker.pointer = getIcon('beneficio_multiple', isSelected);
    } else {
      const infoPlan = PromotionsUtils.setTitle(marker.promotions[0].planPrincipal);
      marker.pointer = getIcon(infoPlan.title, isSelected);
    }
  }

  getTitle(promo: IPromo) {
    if (promo.giftDiscount.code !== '1') {
      return `${promo.giftDiscount.description} en ${promo.commerceName}`;
    }
    return `${promo.plan.description} en ${promo.commerceName}`;
  }

  getSubTitle(promo: IPromo) {
    if (promo.giftDiscount.code !== '1') {
      return promo.plan.description;
    }
    return '';
  }

  onCloseChip(type: string) {
    if (type === 'categories') {
      this.categoriesFilteredItems = [];
    }

    if (type === 'location') {
      this.currentProvince = {};
      this.currentLocality = {};
    }

    if (type === 'commerceName') {
      this.commerceNameFiltered = null;
    }

    const body: IFilterBody = {
      province: this.currentProvince,
      locality: this.currentLocality,
      categories: this.categoriesFilteredItems,
      commerceName: this.commerceNameFiltered,
    };

    return this.onFilterApplied(body);
  }

  onFilterAppliedWithoutLocation(filterBody: IFilterBody) {
    this.openFilter = false;
    this.showFilterWithoutLocation = false;
    document.documentElement.scrollTop = 0;
    this.onFilterApplied(filterBody);
  }

  onFilterApplied(filterBody: IFilterBody) {
    this.applyFilter = true;
    this.loading = true;
    this.isLoading = true;
    this.closeFilterDialog();
    this.promos = [];
    this.markers = [];
    this.markersFiltered = [];
    this.categoriesFilteredItems = filterBody.categories;
    this.currentProvince = filterBody.province;
    this.currentLocality = filterBody.locality;
    this.commerceNameFiltered = filterBody.commerceName;

    this.store.dispatch(new fromByLocationPromotionsActions.ClearData());

    if (filterBody.province.text) {
      const { lat, lng } = filterBody.province.coordinates;
      this.currentPoint = { lat, lng };
      this.centerPoint = { lat, lng };
      this.initialPoint = { lat, lng };
    }

    if (filterBody.locality.text) {
      const { lat, lng } = filterBody.locality.coordinates;
      this.currentPoint = { lat, lng };
      this.centerPoint = { lat, lng };
      this.initialPoint = { lat, lng };
    }

    if (!filterBody.locality.text && !filterBody.province.text) {
      if (!this.isEnableGeolocation) {
        this.showFilterWithoutLocation = true;
        this.openFilter = true;
      }

      if (!filterBody.locality.text && !filterBody.province.text && this.categoriesFilteredItems.length === 0) {
        this.currentZoom = 15;
        this.applyFilter = false;
      }

      this.initialPoint = { ...this.actualPosition };
      this.currentPoint = { ...this.actualPosition };
      this.centerPoint = { ...this.actualPosition };
    }

    if (filterBody.commerceName && filterBody.commerceName.trim().length > 0) {
      // trim the string, then take the first 50 characters and Title Case Transform It
      const userInputProcessed = this.titlecasePipe.transform((filterBody.commerceName.trim().slice(0, 50)));

      filterBody.commerceName = userInputProcessed;
      this.commerceNameFiltered = userInputProcessed;
    }

    this.dispatchActions();
  }

  isFilteredSearchActive() {
    return this.currentProvince.text || this.currentLocality.text || this.categoriesFilteredItems.length || this.commerceNameFiltered;
  }

  locationFilteredData() {
    if (this.currentLocality.text) { return [this.currentLocality.text]; }
    if (this.currentProvince.text) { return [this.currentProvince.text]; }
    return [];
  }

  openFilterDialog() {
    this.openFilter = true;
    this.saveNavigationData();
  }

  closeFilterDialog() {
    this.openFilter = false;
  }

  saveNavigationData() {
    if (!this.currentPoint.lat && !this.currentPoint.lng) {
      this.currentPoint = this.initialPoint;
    }

    const componentData: MapNearYouNavigationData = {
      isEnableGeolocation: this.isEnableGeolocation,
      outOfBounds: this.outOfBounds,
      promos: this.promos,
      markers: this.markers,
      markersFiltered: this.markersFiltered,
      currentPoint: this.currentPoint,
      actualPosition: this.actualPosition,
      centerPoint: this.centerPoint,
      initialPoint: this.initialPoint,
      showLabels: this.showLabels,
      currentLocality: this.currentLocality,
      currentProvince: this.currentProvince,
      currentZoom: this.currentZoom,
      categoriesFilteredItems: this.categoriesFilteredItems,
      showFilterWithoutLocation: this.showFilterWithoutLocation,
      openFilter: this.openFilter,
      commerceNameFiltered: this.commerceNameFiltered,
    };

    const pageData: NavigationMetaData<MapNearYouNavigationData> = {
      componentData,
      scrollPosition: 0,
      componentName: 'MapNearYouComponent',
    };

    this.store.dispatch(new fromActionsNavigation.SaveData(pageData));
  }

  mapCategoriesFilteredFromFilterBody(): string[] {
    return this.categoriesFilteredItems.map(category => category.category);
  }

  showEmptyPromosMessage(filterdMessage: boolean) {

    if (this.openFilter) { return; }

    const data: IZumoSnackbarData = {
      duration: 5,
      text: filterdMessage ? this.translate.instant('PAGES.MAPS.EMPTY_FILTERS') : this.translate.instant('PAGES.MAPS.EMPTY_MARKERS'),
      eventName: filterdMessage ? 'Revisar filtros' : 'Abrir filtros',
      onEvent: this.snackbarSubject,
      hasDuration: true,

    };
    this.snackbarService.showSnackbar(data, this.snackbarSubject);
  }

  openDialog(filterdMessage: boolean): void {
    if (this.openFilter) { return; }

    const dialogData: IDialogData = {
      contentIcon: {
        iconName: 'icon-alert',
        colorIcon: '#FFFFFF',
        colorBackground: '#ffb30f',
      },
      actionsButtons: [
        {
          text: filterdMessage ? 'Revisar filtros' : 'Abrir filtros',
          onAction: this.snackbarSubject,
        },
      ],
      title: filterdMessage ? 'Revisar filtros' : 'Abrir filtros',
      paragraph: filterdMessage ? this.translate.instant('PAGES.MAPS.EMPTY_FILTERS') : this.translate.instant('PAGES.MAPS.EMPTY_MARKERS'),
    };

    this.dialogService.showDialog(dialogData, null);
  }

  ngOnDestroy() {
    this.saveNavigationData();
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
    this.store.dispatch(new fromByLocationPromotionsActions.ClearData());
  }
}
