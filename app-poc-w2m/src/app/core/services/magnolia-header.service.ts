import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HeaderDto } from '../model/header/header-dto'
import { FloatMenuType } from '../enum/common-enum'

@Injectable({
  providedIn: 'root',
})
export class MagnoliaHeaderService {
  private menus: HeaderDto[] = [
    {
      name: 'Destinos',
      title: 'COMPLETA TU VIAJE CON NUESTROS SERVICIOS',
      type: FloatMenuType.DESTINATION,
      url: '#',
      subMenu: [
        {
          steps: 'ANTES DE TU VUELO',
          options: [
            {
              name: 'Premium Fly',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Otros packs de ancillaries',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'BoB',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Prueba COVID pasajeros',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Parking aeropuerto',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Uber/Cabify',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Pre-pack venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Curso miedo a volar',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Hoteles',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'EN EL AEROPUERTO',
          options: [
            {
              name: 'Priority check-in',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Hands-free',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Equipaje prioritario',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Fast-track',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Salas VIP',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Embarque prioritario',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Pre-pack venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'A BORDO',
          options: [
            {
              name: 'Menú a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Menú Gourmet',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Menús especiales',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Entretenimiento',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Kiosco digital',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Wifi',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'EN DESTINO',
          options: [
            {
              name: 'Venta de excursiones',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Facturar maleta en el hotel',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
      ],
    },
    {
      name: 'Tu viaje',
      title: 'Información de tu viaje',
      type: FloatMenuType.DEFAULT,
      url: '#',
      subMenu: [
        {
          steps: 'ANTES DE TU VUELO',
          options: [
            {
              name: 'Premium Fly',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Otros packs de ancillaries',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'BoB',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Prueva COVID pasajeros',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Parking aeropuerto',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Uber/Cabify',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Pre-pack venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Curso miedo a volar',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Hoteles',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'EN EL AEROPUERTO',
          options: [
            {
              name: 'Priority check-in',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Hands-free',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Equipaje prioritario',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Fast-track',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Salas VIP',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Embarque prioritario',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Pre-pack venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'A BORDO',
          options: [
            {
              name: 'Menú a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Menú Gourmet',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Menús especiales',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Entretenimiento',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Kiosco digital',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Wifi',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'EN DESTINO',
          options: [
            {
              name: 'Venta de excursiones',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Facturar maleta en el hotel',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
      ],
    },
    {
      name: 'Completa tu viaje',
      title: 'Completa tu viaje con nuestros servicios',
      type: FloatMenuType.DEFAULT,
      url: '#',
      subMenu: [
        {
          steps: 'ANTES DE TU VUELO',
          options: [
            {
              name: 'Premium Fly',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'ANTES DE TU VUELO',
          options: [
            {
              name: 'Priority check-in',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
      ],
    },
    {
      name: 'Información',
      title: 'Información relevante sobre volar con w2fly',
      type: FloatMenuType.DEFAULT,
      url: '#',
      subMenu: [
        {
          steps: 'ANTES DE TU VUELO',
          options: [
            {
              name: 'Premium Fly',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'ANTES DE TU VUELO',
          options: [
            {
              name: 'Priority check-in',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
      ],
    },
    {
      name: 'Noticias',
      type: FloatMenuType.DEFAULT,
      url: '#',
      subMenu: [],
    },
    {
      name: '¿ Tienes dudas ?',
      title: '¿En qué podemos ayudarte ?',
      type: FloatMenuType.SEARCH,
      icon: 'fa-search',
      url: '#',
      subMenu: [
        {
          steps: 'ANTES DE TU VUELO',
          options: [
            {
              name: 'Premium Fly',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Otros packs de ancillaries',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'BoB',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Prueba COVID pasajeros',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Parking aeropuerto',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Uber/Cabify',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Pre-pack venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Curso miedo a volar',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Hoteles',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'EN EL AEROPUERTO',
          options: [
            {
              name: 'Priority check-in',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Hands-free',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Equipaje prioritario',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Fast-track',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Salas VIP',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Embarque prioritario',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Pre-pack venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'A BORDO',
          options: [
            {
              name: 'Menú a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Menú Gourmet',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Menús especiales',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Entretenimiento',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Kiosco digital',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Venta a bordo',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Wifi',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
        {
          steps: 'EN DESTINO',
          options: [
            {
              name: 'Venta de excursiones',
              icon: 'fa-address-card',
              url: '#',
            },
            {
              name: 'Facturar maleta en el hotel',
              icon: 'fa-address-card',
              url: '#',
            },
          ],
        },
      ],
    },
  ]

  public getMenu(): Observable<HeaderDto[]> {
    return of(this.menus)
  }
}
