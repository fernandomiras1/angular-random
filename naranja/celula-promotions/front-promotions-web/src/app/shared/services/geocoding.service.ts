import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IGeoLocation, ILocation } from '../../core/models/geo-location.model';

@Injectable({
  providedIn: 'root',
})
export class GeocodingService {

  constructor(private http: HttpClient) {
  }

  codeAddress(address): Observable<any> {
    const parsedAddress = address.street ?
      `${address.street},${address.locality},${address.province}` :
      `${address.locality},${address.province}, Argentina`;
    return this.http.removeConsumeInterceptor()
      .addGeolocationCacheInterceptor()
      .get(`${environment.googleMaps.GEOCODE_API}&address=${parsedAddress}${environment.googleMaps.API_KEY}`);
  }

  reverseCodeAddress(latLang) {
    const location = `${latLang.lat},${latLang.lng}`;
    return this.http.removeConsumeInterceptor()
      .addGeolocationCacheInterceptor()
      // tslint:disable-next-line: max-line-length
      .get(`${environment.googleMaps.GEOCODE_API}&latlng=${location}${environment.googleMaps.API_KEY}&result_type=administrative_area_level_1|administrative_area_level_2|locality|sublocality`);
  }

  getCurrentPosition(): Observable<any> {
    const location: ILocation = { locality: '', province: '' };
    return Observable.create((observer) => {
      const positionCallback = (pos) => {
        if (pos) {
          const currentPoint: IGeoLocation = {
            lat: 0,
            lng: 0,
          };
          currentPoint.lng = +pos.coords.longitude;
          currentPoint.lat = +pos.coords.latitude;
          this.reverseCodeAddress(currentPoint).subscribe((loc: any) => {
            if (loc.results.length) {
              const address_components: any[] = loc.results[0].address_components;
              const filtered_components = address_components.filter((component) => {
                const types: string[] = component.types;
                // tslint:disable-next-line: max-line-length
                return (types.includes('administrative_area_level_1') || component.types.includes('administrative_area_level_2') || types.includes('locality') || types.includes('sublocality') && !types.includes('sublocality_level_1'));
              });
              location.province = filtered_components.find((component) => {
                return (component.types.includes('administrative_area_level_1'));
              }).long_name;
              const political = filtered_components.filter((component) => {
                return component.types.includes('political') && component.types.includes('locality');
              });
              if (political.length) {
                location.locality = political[0].long_name;
              } else {
                location.locality = filtered_components.find((component) => {
                  // tslint:disable-next-line: max-line-length
                  return (component.types.includes('locality') || component.types.includes('sublocality') || component.types.includes('administrative_area_level_2'));
                }).long_name;
              }
              observer.next(location);
            }
            observer.complete();
          });
        }
      };
      const geolocationDeniedCallback = () => {
        observer.error('Se ha denegado el acceso a la geolocalización');
      };
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          positionCallback(pos);
        },
        () => { geolocationDeniedCallback(); },
        { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true });
    });
  }
}
