export interface IGeoLocationAddress {
  street: string;
  province: string;
  locality: string;
  geoposition: IGeoLocation;
}

export interface IGeoLocation {
  lat: number;
  lng: number;
}

export interface ILocation {
  province: string;
  locality: string;
}
