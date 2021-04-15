import { Injectable } from '@angular/core';
import { IFeaturedPromo } from '../../../core/models/featured-promotion.model';

@Injectable({
  providedIn: 'root',
})
export class PromotionRulesService {
  constructor() { }

  getFullPayload(feature: IFeaturedPromo, domainValues: any): any {
    const payloadBody = {};
    // const jp = require('jsonpath');

    // feature.payload.forEach((item) => {
    //   Object.entries(item).forEach((([key, value]) => {
    //     const domainValue = jp.query(domainValues, `$.${value as string}`)[0];
    //     if (!!domainValue) {
    //       payloadBody[key] = domainValue;
    //     }
    //   }));
    // });

    const body = {
      aspect: {
        code: 'FEATURED',
        feature: feature.name,
      },
      payload: payloadBody,
    };

    return body;
  }
}
