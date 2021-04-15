import { Injectable } from '@angular/core';
import cryptoJs from 'crypto-js';

const secretKey = 'Mpk7@CNfcA';
/* istanbul ignore next */
@Injectable({
  providedIn: 'root',
})
export class GtmService {

  dataLayer: any;
  // tslint:disable-next-line:no-shadowed-variable
  gtmScriptLoad(gtmId) {
    /* tslint:disable */
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];

    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
      // @ts-ignore
      j.async = true;
      // @ts-ignore
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtmId);
  }
  /* tslint:enable */

  pushInformation(dataLayer) {
    if ((<any>window).dataLayer) {
      (<any>window).dataLayer.push(dataLayer);
    }
  }

  encryptData(data) {
    return cryptoJs.AES.encrypt(data.toString(), secretKey).toString();
  }

  decryptData(data) {
    return cryptoJs.AES.decrypt(data, secretKey).toString(cryptoJs.enc.Utf8);
  }
}
