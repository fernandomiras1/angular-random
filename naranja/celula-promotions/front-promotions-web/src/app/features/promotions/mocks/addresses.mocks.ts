import { IAddress } from '../../../core/models/address.model';

const mainAddress: IAddress = {
  address: 'street',
  province: 'province',
  locality: 'locality',
  coordinates: '',
};

const otherAddresses: IAddress[] = [
  {
    address: '',
    province: 'p',
    locality: 'l',
    coordinates: '',
  },
  {
    address: 's',
    province: '',
    locality: 'l',
    coordinates: '',
  },
  {
    address: 's',
    province: 'p',
    locality: '',
    coordinates: '',
  },
  {
    address: 'street1',
    province: 'province1',
    locality: 'locality1',
    coordinates: '',
  },
  {
    address: 'street2',
    province: 'province2',
    locality: 'locality2',
    coordinates: '',
  },
  {
    address: 'street3',
    province: 'province3',
    locality: 'locality3',
    coordinates: '',
  },
];

export const addressesMock = {
  mainAddress,
  otherAddresses,
};
