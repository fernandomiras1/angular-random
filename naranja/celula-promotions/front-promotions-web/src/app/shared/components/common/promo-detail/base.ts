import { Input, OnInit } from '@angular/core';
import { ITag } from '@app/core/models/tag.model';
import { CommonService } from '@shared/services/common.service';
import { DateTime } from 'luxon';

import { environment } from '../../../../../environments/environment';
import { defaults } from '../../../../constants/default-elements';
import { IAddress } from '../../../../core/models/address.model';
import { IFeaturedPromo } from '../../../../core/models/featured-promotion.model';
import { IGeoLocation } from '../../../../core/models/geo-location.model';
import { IPromo } from '../../../../core/models/promo.model';
import { PromotionsService } from '../../../../features/promotions/services/promotions.service';
import { AddressesService } from '../../../../shared/services/addresses.service';
import { ImagesUtils } from '../../../../shared/utils/images.utils';

export class PromoDetailComponentBase implements OnInit {
  @Input() promo: IPromo;
  @Input() featuredPromo: IFeaturedPromo;
  moreLocalsFinished = false;

  public title: string;
  public subtitle: string;
  public logoUrl: string;
  public defaultLogo = defaults.DEFAULT_LOGO_URL;
  public categoryIcon: string;
  public emptyIcon: string;
  public promoMap: string;
  public filterIcon = defaults.FILTER_ICON_URL;
  public counterData: any;
  public addresses: { mainAddress: IAddress; otherAddresses: IAddress[] } = {
    mainAddress: null,
    otherAddresses: [],
  };
  public showLocalsModal = false;
  public isPromoOnline = false;
  public showDates = false;
  public bannerImage: string;
  public promoSelected = 'Local cerca tuyo';
  public tag: ITag = null;
  protected isMobile = true;
  protected webPageShowed: string;
  public showAddresses = [];
  public loadingLocals = false;

  public currentPoint: IGeoLocation = {
    lat: 0,
    lng: 0,
  };

  constructor(
    protected promoService: PromotionsService,
    protected addressesService: AddressesService,
    protected commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.processAddress();
    this.setTitle(this.promo);
    this.setIcon(this.promo.sector.category);
    this.setLogo(this.promo.commerceName);
    this.setBannerImage(this.featuredPromo);
    this.getCounterData();
    this.setTag(this.promo.tags);
    this.webPageShowed = this.truncateWebPage(this.promo.webPage);
    this.init();
  }

  protected init(): void {
    this.isPromoOnline = !!this.promo.webPage; // && !!!this.addresses.mainAddress && !!!this.addresses.otherAddresses.length;
    if (this.promo.specification.otherDetails) {
      this.promo.specification.otherDetails.trim();
    }
    this.showDates = this.mustShowDate();
    setTimeout(
      () => {
        this.loadingLocals = true;
        this.loadLocals();
      },
      500);
  }

  protected mustShowDate(): boolean {
    const daysType = this.promo.days.type;
    let date_from;
    let date_to;

    if (daysType === 2 || daysType === 1) {
      date_from = this.promo.days.daysApplied[0];
      date_to = this.promo.days.daysApplied[this.promo.days.daysApplied.length - 1];
    }
    if (date_from === date_to) {
      return false;
    }

    return true;
    // if (this.subtitle && this.subtitle.toLowerCase().trim() === 'smartes') {
    //   return false;
    // }
    // return true; DatesUtils.checkIfConsecutiveDays(this.promo.days);
  }

  truncateWebPage = (input) => {
    return input.length > 5 ? `${input.substring(0, 35)}...` : input;
  }

  setTitle(promo: IPromo) {
    if (promo.giftDiscount.code === '2') {
      this.title = `${promo.plan.mainShortName || promo.plan.description}`;
      this.subtitle = `${promo.plan.secondaryShortName || ''}`;
      return;
    }

    if (promo.giftDiscount.code === '3') {
      this.title = `${promo.plan.mainShortName || promo.plan.description}`;
      this.subtitle = `${promo.giftDiscount.mainShortName || promo.giftDiscount.description}`;
      return;
    }

    if (promo.giftDiscount.code !== '1') {
      this.title = promo.giftDiscount.mainShortName || promo.giftDiscount.description || '';
      this.subtitle = promo.plan.mainShortName || promo.plan.description;
    } else {
      this.title = promo.plan.mainShortName || promo.plan.description;
      this.subtitle = '';
    }
  }

  setIcon(category: string) {
    const iconName = ImagesUtils.generateName(category, '-');
    this.categoryIcon = `assets/images/icons/categories/${iconName}.svg`;
    this.emptyIcon = `assets/images/icons/categories/${iconName}-empty.svg`;
  }

  setBannerImage(featured: IFeaturedPromo) {
    if (featured && featured.backImageName) {
      this.bannerImage = featured.backImageName;
    }
  }

  setLogo(localName: string) {
    const logoName = ImagesUtils.generateName(localName, '_');
    this.logoUrl = `${environment.endpoints.BASE_URL_LOGO}/${logoName}.webp`;
  }

  getCounterData() {
    this.counterData = this.promoService.getDaysCounter(this.promo);
  }

  processAddress() {
    if (!this.promo) {
      return;
    }

    this.addresses = this.addressesService.extractAddresses(this.promo.address);

    if (!this.addresses) {
      return;
    }

    if (!this.addresses.mainAddress) {
      return;
    }

    if (this.addresses.mainAddress && !this.addresses.otherAddresses.length) {
      this.promoMap = this.addressesService.getMapUrl(
        this.addresses.mainAddress,
      );
    } else {
      this.reorderNearestPromotion();
    }
  }

  moreLocals() {
    this.commonService.changeStyleBodyFixed('add');
    this.showLocalsModal = true;
  }

  loadLocals() {
    const alladdresses = [...this.addresses.otherAddresses];
    const step = 100;
    let stepArray = alladdresses.slice(0, step);
    alladdresses.splice(0, step);
    this.showAddresses = [...stepArray];
    const idInterval = setInterval(
      () => {
        if (alladdresses.length) {
          stepArray = alladdresses.slice(0, step);
          this.showAddresses = [...this.showAddresses, ...stepArray];
          alladdresses.splice(0, step);
        } else {
          this.moreLocalsFinished = true;
          clearInterval(idInterval);
        }
      },
      50);
  }

  showWhereBlock() {
    return !!this.addresses.mainAddress || !!this.promo.webPage;
  }

  onMapClick() {
    const url = `${environment.googleMaps.MAP_URL_API
      }&query=${this.addressesService.getEncodedUrl(this.addresses.mainAddress)}`;

    window.open(url, '_blank');
  }

  getCommerceUrl(): string {
    return this.promo.webPage.startsWith('http')
      ? this.promo.webPage.trim()
      : `https://${this.promo.webPage.trim()}`;
  }

  closeModal() {
    this.commonService.changeStyleBodyFixed('remove');
    this.showLocalsModal = false;
  }

  onSelectedAddress(index: number) {
    this.promoSelected = 'Local seleccionado';
    const address: IAddress = this.showAddresses[index];

    if (!address.address || !address.province || !address.locality) {
      return (this.showLocalsModal = false);
    }

    this.showAddresses.splice(index, 1);
    this.showAddresses.push(this.addresses.mainAddress);
    this.addresses.mainAddress = address;

    this.promoMap = this.addressesService.getMapUrl(this.addresses.mainAddress);

    this.commonService.changeStyleBodyFixed('remove');
    this.showLocalsModal = false;
  }

  reorderNearestPromotion() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.currentPoint.lng = +pos.coords.longitude;
          this.currentPoint.lat = +pos.coords.latitude;

          const addresses = [
            this.addresses.mainAddress,
            ...this.addresses.otherAddresses,
          ];

          let minorDistance = -1;
          let minorDistanceIndex = -1;
          let q = 0;

          addresses.forEach((address, index) => {
            q += 1;
            const coords = address.coordinates.split(',');
            const location = {
              lat: parseFloat(coords[0].trim()),
              lng: parseFloat(coords[1].trim()),
            };

            const distance = this.addressesService.getDistance(
              location,
              this.currentPoint,
            );

            if (minorDistance === -1) {
              minorDistance = distance;
              minorDistanceIndex = index;
            } else {
              if (distance < minorDistance) {
                minorDistance = distance;
                minorDistanceIndex = index;
              }
            }

            if (q === addresses.length) {
              const nearestAddress = addresses[minorDistanceIndex];
              addresses.splice(minorDistanceIndex, 1);

              this.addresses = {
                mainAddress: nearestAddress,
                otherAddresses: addresses,
              };
              this.promoMap = this.addressesService.getMapUrl(
                this.addresses.mainAddress,
              );
            }
          });
        },
        () =>
          (this.promoMap = this.addressesService.getMapUrl(
            this.addresses.mainAddress,
          )),
        { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true },
      );
    }
  }

  setTag(tags: ITag[]) {
    const result = tags.filter(tag => tag.type && tag.type.toLowerCase() === 'specials'
      && tag.active && tag.visible)
      .sort((a, b) => a.tag.localeCompare(b.tag));

    if (result.length > 0) {
      const firstTag: ITag = result[0];

      const from = firstTag.dateFrom ? DateTime.fromFormat(firstTag.dateFrom, 'dd/MM/yyyy') : null;
      const to = firstTag.dateTo ? DateTime.fromFormat(firstTag.dateTo, 'dd/MM/yyyy') : null;

      if (from && to && Date.now() >= from.ts && Date.now() <= to.ts) {
        this.tag = result[0];
      }
    }
  }
}
