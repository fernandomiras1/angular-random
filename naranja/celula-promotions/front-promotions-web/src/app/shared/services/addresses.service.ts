import { Injectable } from '@angular/core';
import { NavigatorService } from '../../core/utils/services/navigator.service';
import { IAddress } from '../../core/models/address.model';
import { environment } from '../../../environments/environment';
import { IGeoLocation, IGeoLocationAddress } from '../../core/models/geo-location.model';

@Injectable({
  providedIn: 'root',
})

export class AddressesService {

  constructor(
    private navigatorService: NavigatorService,
  ) { }

  extractAddresses(addresses: IAddress[]) {
    if (addresses.length) {

      const filtered = addresses.filter(address => address.address && address.locality && address.province && address.coordinates);
      const mainAddress = filtered[0];
      filtered.splice(0, 1);

      return { mainAddress, otherAddresses: [...filtered] };
    }
    return { mainAddress: null, otherAddresses: [] };
  }

  getMapUrl(address: IAddress) {
    if (address) {
      const isMobile = this.navigatorService.isMobile();

      const street = address.address.split(' ').join('+');
      const parsedAddress = `${street},${address.locality},${address.province}`;

      const mapConfig = isMobile ? environment.googleMaps.MAP_CONFIG : environment.googleMaps.MAP_CONFIG_WEB;

      const mapUrl = environment.googleMaps.BASE_URL
      + parsedAddress + mapConfig
      + parsedAddress + environment.googleMaps.API_KEY;

      return mapUrl;
    }
  }

  getEncodedUrl(address: IAddress): string {
    return encodeURI(`${address.address},${address.locality},${address.province}`);
  }

  getAddresses(addresses: IAddress[]): IGeoLocationAddress[] {
    return addresses.map((item: IAddress) => {
      if (!!item.coordinates) {
        const geoposTrimmed = item.coordinates.split(',').map(field => Number(field.trim()));
        const geoposition: IGeoLocation = { lat: geoposTrimmed[0], lng: geoposTrimmed[1] };
        return { geoposition, street: item.address, locality: item.locality, province: item.province };
      }
      return { geoposition: null, street: item.address, locality: item.locality, province: item.province };
    });
  }

  getDistance(checkPoint, centerPoint) {
    const ky = 40000 / 360;
    const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
