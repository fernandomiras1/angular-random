import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Carousel } from '../model/cards/carousel'
import { Card } from '../model/cards/card'
import { ButtonDto } from '../model/button/button-dto'

@Injectable({
  providedIn: 'root',
})
export class MagnoliaService {
  public listHoverCard: Card[] = [
    {
      title: 'Sólida, de confianza, de calidad',
      content: 'Ser vacacionales no significa sacrificar calidad.'
      + ' Queremos transmitir el máximo valor y perseguir la excelencia para'
      + ' ponerla al servicio de nuestros viajeros.',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '',
      descriptionImage: 'Medidas contra el covid-19',
      imageZoom: false,
      generalTags: [],
      categoryTags: [],
    },
    {
      title: 'Sólida, de confianza, de calidad',
      content: 'Ser vacacionales no significa sacrificar calidad.'
      + ' Queremos transmitir el máximo valor y perseguir la excelencia para'
      + ' ponerla al servicio de nuestros viajeros.',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '',
      descriptionImage: 'Medidas contra el covid-19',
      imageZoom: false,
      generalTags: [],
      categoryTags: [],
    },
    {
      title: 'Sólida, de confianza, de calidad',
      content: 'Ser vacacionales no significa sacrificar calidad.'
      + ' Queremos transmitir el máximo valor y perseguir la excelencia para'
      + ' ponerla al servicio de nuestros viajeros.',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '',
      descriptionImage: 'Medidas contra el covid-19',
      imageZoom: false,
      generalTags: [],
      categoryTags: [],
    },
  ]

  public listCard: Card[] = [
    {
      title: 'Medidas contra el covid',
      content: 'medidas contr el covid',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: 'Medidas contra el Covid-19',
      descriptionImage: 'Medidas contra el covid-19',
      imageZoom: true,
      generalTags: [
        { text: 'Gastronomía', color: 'blue', styleClassTag: 'top-right' },
      ],
      categoryTags: [
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
      ],
    },
    {
      title: 'Hello world',
      content: 'Hello world',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '¿Tienes reserva? Elige tu asiento',
      descriptionImage: '¿Tienes reserva? Elige tu asiento',
      imageZoom: false,
      generalTags: [],
      categoryTags: [{ text: 'Importante', color: 'red', styleClassTag: 'top-right' }],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '5 destinos para descubrir',
      descriptionImage: '5 destinos para descrubir',
      imageZoom: true,
      generalTags: [
        { text: 'Gastronomía', color: 'blue', styleClassTag: 'top-right' },
      ],
      categoryTags: [],
    },
  ]

  public carouselCards: Card[] = [
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '1 MEDIDAS CONTRA EL COVID-19',
      descriptionImage: '1 Medidas contra el covid-19',
      imageZoom: true,
      generalTags: [
        { text: 'Gastronomía', color: 'blue', styleClassTag: 'top-right' },
      ],
      categoryTags: [
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
      ],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '2 ¿TIENES RESERVA? ELIGE TU ASIENTO',
      descriptionImage: '2 ¿Tienes reserva? Elige tu asiento',
      imageZoom: false,
      generalTags: [],
      categoryTags: [{ text: 'Importante', color: 'blue', styleClassTag: 'top-right' }],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '3 5 DESTINOS PARA DESCUBRIR',
      descriptionImage: '5 destinos para descrubir',
      imageZoom: false,
      generalTags: [],
      categoryTags: [],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '4 MEDIDAS CONTRA EL COVID-19',
      descriptionImage: 'Medidas contra el covid-19',
      imageZoom: true,
      generalTags: [],
      categoryTags: [
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
      ],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '5 ¿TIENES RESERVA? ELIGE TU ASIENTO',
      descriptionImage: '¿Tienes reserva? Elige tu asiento',
      imageZoom: false,
      generalTags: [],
      categoryTags: [{ text: 'Importante', color: 'red', styleClassTag: 'top-right' }],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '6 5 DESTINOS PARA DESCUBRIR',
      descriptionImage: '5 destinos para descrubir',
      imageZoom: false,
      generalTags: [],
      categoryTags: [],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '7 MEDIDAS CONTRA EL COVID-19',
      descriptionImage: 'Medidas contra el covid-19',
      imageZoom: false,
      generalTags: [],
      categoryTags: [
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
        { text: 'Importante', color: 'blue', styleClassTag: 'top-right' },
      ],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '8 ¿TIENES RESERVA? ELIGE TU ASIENTO',
      descriptionImage: '¿Tienes reserva? Elige tu asiento',
      imageZoom: false,
      generalTags: [],
      categoryTags: [{ text: 'Importante', color: 'red', styleClassTag: 'top-right' }],
    },
    {
      title: '',
      content: '',
      urlImage: 'assets/img/examples/shiba2.jpg',
      titleImage: '9 5 DESTINOS PARA DESCUBRIR',
      descriptionImage: '5 destinos para descrubir',
      imageZoom: true,
      generalTags: [],
      categoryTags: [],
    },

  ]

  public carousel: Carousel={
    displayLength: 3,
    listCard: this.carouselCards,
  }

  public button: ButtonDto={
    enabledComponent: true,
    typeComponent: 'w2fly-button',
    text: 'Reserva nuestros servicios',
    href: '/profile',
  }

  private readonly URL_MAGNOLIA = '/cards'

  constructor(private httpClient: HttpClient) { }

  public cardsHomeSection(): Observable<Card[]> {
    return of(this.listCard)
    // return this.httpClient.get<Card[]>(`${this.URL_MAGNOLIA}`)
  }

  public carouselHomeSection(): Observable<Carousel> {
    return of(this.carousel)
  }

  public HoverCardsSection(): Observable<Card[]> {
    return of(this.listHoverCard)
  }

  public buttonComponent(): Observable<ButtonDto> {
    return of(this.button)
  }
}
