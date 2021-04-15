import { IGeoLocation } from '../../models/geo-location.model';
import { IPromo } from '../../models/promo.model';

export interface MapNearYouNavigationData {
  isEnableGeolocation: boolean;
  outOfBounds: boolean;
  promos: IPromo[];
  markers: any[];
  markersFiltered: any[];
  currentPoint: IGeoLocation;
  centerPoint: IGeoLocation;
  initialPoint: IGeoLocation;
  actualPosition: IGeoLocation;
  showLabels: boolean;
  currentLocality: string;
  currentProvince: string;
  currentZoom: number;
  categoriesFilteredItems: any[];
  showFilterWithoutLocation: boolean;
  openFilter: boolean;
  commerceNameFiltered: string;
}
