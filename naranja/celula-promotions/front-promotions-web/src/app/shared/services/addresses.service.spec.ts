import { TestBed } from '@angular/core/testing';
import { IAddress } from '@core/models/address.model';

import { AddressesService } from './addresses.service';
import { WindowService } from '@core/utils/services/window.service';

describe('AddressesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [WindowService],
  }));

  it('should be created', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    expect(service).toBeTruthy();
  });

  it('should return the correct format of addresses { mainAddress: {}, otherAddresses: [{}, {}, {}] }', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    const addressMock: IAddress[] = [
      {
        address: 'calle1',
        locality: 'localidad1',
        province: 'provincia1',
        coordinates: '-31.4688676, -64.1888493',

      },
      {
        address: 'calle2',
        locality: 'localidad2',
        province: 'provincia2',
        coordinates: '-31.4688676, -64.1888493',

      },
      {
        address: 'calle3',
        locality: 'localidad3',
        province: 'provincia3',
        coordinates: '-31.4688676, -64.1888493',

      },
    ];

    const res = service.extractAddresses(addressMock);
    expect(res.mainAddress).toEqual({
      address: 'calle1',
      locality: 'localidad1',
      province: 'provincia1',
      coordinates: '-31.4688676, -64.1888493',
    });
    expect(res.otherAddresses.length).toBe(2);
  });

  it('should return an string with map url', () => {
    const service: AddressesService = TestBed.get(AddressesService);
    const addressMock: IAddress = { address: 'calle1', locality: 'localidad1', province: 'provincia1', coordinates: '' };

    const res = service.getMapUrl(addressMock);
    expect(res).toContain(addressMock.address);
    expect(res).toContain(addressMock.locality);
    expect(res).toContain(addressMock.province);
  });
});
