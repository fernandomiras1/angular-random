import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatesUtils } from '@app/shared/utils/dates.utils';
import { provinceMap } from '@constants/maps.constants';
import { ILocation } from '@core/models/geo-location.model';
import { IPromo } from '@core/models/promo.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {

  constructor(private http: HttpClient) { }

  getSuggested(pageNumber: number, size: number, location: ILocation) {
    if (location) {
      const locality = location.locality;
      const province = provinceMap[location.province] ? provinceMap[location.province] : location.province;
      // tslint:disable-next-line: max-line-length
      return this.http.get(`${environment.endpoints.BASE_URL_BFF}/promotions/recommended/?page=${pageNumber}&size=${size}&province=${province}&locality=${locality}`);
    }
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.endpoints.BASE_URL_BFF}/promotions/recommended/?page=${pageNumber}&size=${size}`);
  }

  getByGeolocation(body) {
    return this.http.post(`${environment.endpoints.BASE_URL_BFF}/promotions/by-geolocation`, body);
  }

  getOneById(id: string) {
    return this.http.get(`${environment.endpoints.BASE_URL_BFF}/promotions/${id}`);
  }

  getFiltered(body, pageNumber: number, size: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${environment.endpoints.BASE_URL_BFF}/promotions/filter?page=${pageNumber}&size=${size}`, body);
  }

  getFeaturedPromotions(body: any) {
    return this.http.get(`${environment.endpoints.BASE_URL_BFF}/aspects?type=FEATURED`);
  }

  getBussinesRules(payload) {
    let params = `?page=${payload.page}&size=${payload.size}`;
    if (payload.province && payload.locality) {
      const locality = payload.locality;
      const province = provinceMap[payload.province] ? provinceMap[payload.province] : payload.province;
      params += `&province=${province}&locality=${locality}`;
    }
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.endpoints.BASE_URL_BFF}/aspects/class/IMPERSONATE_BUSINESS_RULE${params}`);
  }

  getPromotionsByRule(body: any) {
    return this.http.post(`${environment.endpoints.BASE_URL_BFF}/rules`, body);
  }

  getPromotionsCount() {
    return this.http.get(`${environment.endpoints.BASE_URL_BFF}/promotions/count`);
  }

  getDaysCounter(promo: IPromo) {
    const counterData = { message: '', show: false, alert: true };
    const daysType = promo.days.type;

    let date_from;
    let date_to;

    if (daysType === 2) {
      date_from = promo.days.daysApplied[0];
      date_to = promo.days.daysApplied[promo.days.daysApplied.length - 1];
      counterData['show'] = true;
      counterData['message'] = 'Todos los días';
      counterData['alert'] = false;

    }
    if (daysType === 1) {
      date_from = promo.days.daysApplied[0];
      date_to = promo.days.daysApplied[promo.days.daysApplied.length - 1];
      counterData['show'] = true;
      counterData['alert'] = false;
      counterData['message'] = DatesUtils.getVigencyText(promo.days);
    }

    if (!DatesUtils.isPromoInForce(date_from)) { return counterData; }

    if (date_from.trim() === date_to.trim()) {

      const finishToday = DatesUtils.uniqueDay(date_from);

      if (finishToday) {

        counterData['show'] = true;
        counterData['message'] = '¡Sólo por hoy!';

        return counterData;
      }
    }

    if (daysType !== 2) { return counterData; }

    const remainingDays = DatesUtils.remainingDays(date_to);

    if (remainingDays > 10 || remainingDays < 0) { return counterData; }

    counterData['show'] = true;
    counterData['count'] = remainingDays;
    counterData['alert'] = true;

    let message = '';

    if (remainingDays === 1) {
      message = `¡Queda ${remainingDays} día!`;
    } else if (remainingDays === 0) {
      message = '¡Último día!';
    } else {
      message = `¡Quedan ${remainingDays} días!`;
    }

    counterData['message'] = message;

    return counterData;
  }

  setWithExpiry(key: string, value: any, ttl: number) {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }

  getWithExpiry(key: string) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) { return null; }
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
}
