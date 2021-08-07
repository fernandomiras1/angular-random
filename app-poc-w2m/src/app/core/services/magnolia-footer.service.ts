import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { DataFooter } from '../model/footer'

@Injectable({
  providedIn: 'root',
})
export class MagnoliaFooterService {
  getData(): Observable<DataFooter[]> {
    return of([
      {
        name: 'World 2 Fly',
        subItems: [
          { name: 'Quines somos', url: '#' },
          { name: 'Nuestra flota', url: '#' },
          { name: 'Sostenibilidad', url: '#' },
        ],
      },
      {
        name: 'Lorem imsum',
        subItems: [
          { name: 'Noticias', url: '#' },
          { name: 'Preguntas frecuentes', url: '#' },
          { name: 'Condificones generales', url: '#' },
          { name: 'Servicio de atención al cliente', url: '#' },
        ],
      },
      {
        name: 'Descárgate nuestra app',
        subItems: [
          { name: 'En Apple Store', url: '#' },
          { name: 'En Google Play', url: '#' },
        ],
      },
      {
        name: 'Contacta con Nosotros',
        subItems: [],
        icons: [
          { name: 'fa-facebook', url: '#' },
          { name: 'fa-instagram', url: '#' },
          { name: 'fa-twitter', url: '#' },
          { name: 'fa-youtube', url: '#' },
          { name: 'fa-linkedin', url: '#' },
        ],
      },
    ])
  }
}
