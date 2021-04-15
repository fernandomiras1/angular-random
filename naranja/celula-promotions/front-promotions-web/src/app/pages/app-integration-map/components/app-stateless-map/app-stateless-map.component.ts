import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { clusterStyles, getIcon, mapImageSrc, mapStyles } from '../../../../constants/maps.constants';
import { IGeoLocation, IGeoLocationAddress } from '../../../../core/models/geo-location.model';
import { IPromo } from '../../../../core/models/promo.model';
import { AddressesService } from '../../../../shared/services/addresses.service';
import { PromotionsUtils } from '../../../../shared/utils/promotions.utils';

@Component({
  selector: 'app-stateless-map',
  templateUrl: './app-stateless-map.component.html',
  styleUrls: ['./app-stateless-map.component.scss'],
})
export class AppStatelessMapComponent implements OnInit, OnChanges {
  @Input() promos: IPromo[];
  @Input() currentProvince: string;
  @Input() currentLocality: string;
  @Input() categoriesFiltered: string[] = [];
  @Input() initialPoint: IGeoLocation = {
    lat: 0,
    lng: 0,
  };

  @Output() zoomChange = new EventEmitter<number>();
  @Output() promoClick = new EventEmitter<string>();

  public outOfBounds: boolean;
  public showLabels = true;
  public isLoading = false;
  public currentZoom = 15;
  public minZoom = 8;
  public maxZoom = 19;
  public markers: any[] = [];
  public markersFiltered: any[] = [];
  public mapStyles = mapStyles;
  public imgSrc = mapImageSrc;
  public clusterStyles = clusterStyles;
  public currentPoint: IGeoLocation = {
    lat: 0,
    lng: 0,
  };
  public centerPoint: IGeoLocation = {
    lat: 0,
    lng: 0,
  };

  constructor(
    private addressesService: AddressesService,
  ) { }

  ngOnInit() {
    if (this.promos.length) {

      this.verifyPosition(this.initialPoint);
      this.resolvePromotions(this.promos);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.promos.previousValue !== changes.promos.currentValue) {
      this.resolvePromotions(this.promos);
    }
    if (changes.initialPoint.previousValue !== changes.initialPoint.currentValue) {
      this.verifyPosition(this.initialPoint);
    }
  }

  resolvePromotions(promotions) {
    if (promotions.length) {
      this.getMarkers();
      this.isLoading = false;
      if (this.outOfBounds) {
        this.outOfBounds = false;
      }
    }
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
    this.getAddress(this.promos);
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
    const infoPlan = PromotionsUtils.setTitle(promo.plan.description);

    if (address && address.geoposition) {
      const distance = this.addressesService.getDistance({ lat: address.geoposition.lat, lng: address.geoposition.lng }, this.initialPoint);
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
      }
      const centerPoint = this.currentPoint;
      this.filterPromosNearPosition(centerPoint);
    }
  }

  getPromoDetail(promo: IPromo, address: IGeoLocationAddress, infoPlan, distance: number) {
    return {
      id: promo.id,
      street: address.street,
      distance: (distance * 1000) < 1000 ?
        `${Math.round(distance * 1000)} m` :
        `${Math.round(distance * 10) / 10} Km`,
      imgSrc: PromotionsUtils.setLogo(promo.commerceName),
      title: this.getTitle(promo),
      subtitle: this.getSubTitle(promo),
      planPrincipal: infoPlan.title,
      nombreComercio: promo.commerceName,
      categoria: promo.sector.category,
    };
  }

  /**
   * This function filter the markers near to 5km
   * @param {Object} centerPoint.
   */
  filterPromosNearPosition(centerPoint) {
    const newMarkers = this.markers.filter((mark) => {
      return this.arePointsNear(mark, centerPoint) &&
        !this.markersFiltered.find(x => x.lat === mark.lat && x.lng === mark.lng);
    });
    if (newMarkers.length) {
      this.markersFiltered.push(...newMarkers);
    }
  }

  truncateLabel(label, isSelected) {
    return this.currentZoom >= 17 || isSelected ? label : label.substring(0, 13);
  }

  verifyPosition(latLng) {
    this.centerPoint.lng = latLng.lng;
    this.centerPoint.lat = latLng.lat;
    this.currentPoint.lat = latLng.lat;
    this.currentPoint.lng = latLng.lng;

    this.filterPromosNearPosition(latLng);
    this.outOfBounds = !this.arePointsNear(latLng, this.currentPoint)
      && !this.arePointsNear(latLng, this.initialPoint)
      && this.currentZoom >= 13;
  }

  getNewLocation() {
    this.isLoading = true;
    this.outOfBounds = false;
    this.currentPoint = { ...this.centerPoint };
  }

  manageZoom(zoom: number) {
    if (zoom > this.maxZoom) {
      this.currentZoom = this.maxZoom;
    } else {
      this.currentZoom = zoom;
    }
    this.showLabels = zoom > 15;
    this.zoomChange.emit(this.currentZoom);
  }

  arePointsNear(checkPoint, centerPoint) {
    const km = 5;
    return this.addressesService.getDistance(checkPoint, centerPoint) <= km;
  }

  markerSelect(marker) {
    const anySelected = this.markersFiltered.find(x => x.isSelected);
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
    } return '';
  }

  onCloseChip(type: string) {
    if (type === 'categories') {
      this.categoriesFiltered = [];
    }

    if (type === 'location') {
      this.currentProvince = null;
      this.currentLocality = null;
    }
  }

  isFilteredSearchActive() {
    return this.currentProvince || this.currentLocality || this.categoriesFiltered.length;
  }

  locationFilteredData() {
    if (this.currentLocality) { return [this.currentLocality]; }
    if (this.currentProvince) { return [this.currentProvince]; }
    return [];
  }

  onPromoClicked(promoId) {
    this.promoClick.emit(promoId);
  }
}
