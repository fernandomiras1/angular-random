import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MagnoliaService {
  public PAGE_CURRENT: string

  private readonly PROJECT = 'w2fly'

  constructor(private http: HttpClient) {
  }

  public getPage(): Observable<any> {
    return of({
      keywords: [],
      redirects: [],
      footer: {
        footerVisible: true,
      },
      header: {
        hasBanner: false,
        headerTransparent: true,
        headerVisible: true,
      },
      semanticMarkup: [],
      title: 'Centro de atención al cliente - W2Fly',
      pageId: 'centro-de-atencion',
      url: 'http://www.w2fly.es/centro-de-atencion',
      content: [
        {
          positionMobile: 'center-center',
          backgroundColor: false,
          positionDesktop: 'center-center',
          hasContent: true,
          onlyVisibleOnNewsList: false,
          onlyVisibleOnNewsDetail: false,
          fields: [
            {
              field: {
                hasSeparator: false,
                subtitleColor: 'white',
                titleColor: 'white',
                title: 'New Corporate Mobility Design',
              },
              typeComponent: 'component-subtitle',
            },
            {
              field: [
                {
                  image: 'https://pre-cms.w2m.com/.imaging/mte/basic-theme/fullHd/dam/Sites/Ubico/imagenes/Komodo/GettyImages-1080750202.jpg/jcr:content/GettyImages-1080750202.jpg',
                  backgroundColor: false,
                  altText: 'Calle noche burbujas - Nueva Movilidad',
                  borderRadius: {
                    bottomLeft: false,
                    bottomRight: false,
                    topLeft: false,
                    topRight: false,
                  },
                  title: 'New Corporate Mobility Design',
                },
                {
                  image: 'https://pre-cms.w2m.com/.imaging/mte/basic-theme/fullHd/dam/Sites/Ubico/imagenes/Komodo/GettyImages-1154231467.jpg/jcr:content/GettyImages-1154231467.jpg',
                  backgroundColor: false,
                  altText: 'GettyImages-1154231467.jpg',
                  borderRadius: {
                    bottomLeft: false,
                    bottomRight: false,
                    topLeft: false,
                    topRight: false,
                  },
                  title: 'Digital service, family care',
                },
                {
                  image: 'https://pre-cms.w2m.com/.imaging/mte/basic-theme/fullHd/dam/Sites/Ubico/imagenes/Komodo/GettyImages-980390320.jpg/jcr:content/GettyImages-980390320.jpg',
                  backgroundColor: false,
                  altText: 'GettyImages-980390320.jpg',
                  borderRadius: {
                    bottomLeft: false,
                    bottomRight: false,
                    topLeft: false,
                    topRight: false,
                  },
                  title: 'La libertad de la experiencia',
                },
                {
                  image: 'https://pre-cms.w2m.com/.imaging/mte/basic-theme/fullHd/dam/Sites/Ubico/imagenes/Komodo/GettyImages-615612706---copia.jpg/jcr:content/GettyImages-615612706%20-%20copia.jpg',
                  backgroundColor: false,
                  altText: 'GettyImages-615612706---copia.jpg',
                  borderRadius: {
                    bottomLeft: false,
                    bottomRight: false,
                    topLeft: false,
                    topRight: false,
                  },
                  title: 'Moving on',
                },
                {
                  image: 'https://pre-cms.w2m.com/.imaging/mte/basic-theme/fullHd/dam/Sites/Ubico/imagenes/Komodo/GettyImages-1204482432_studio.jpg/jcr:content/GettyImages-1204482432_studio.jpg',
                  backgroundColor: false,
                  altText: 'GettyImages-1204482432_studio.jpg',
                  borderRadius: {
                    bottomLeft: false,
                    bottomRight: false,
                    topLeft: false,
                    topRight: false,
                  },
                  title: 'Buen rollo',
                },
              ],
              displayLength: 1,
              typeComponent: 'component-carousel',
              variation: 'fullHd',
              enabledComponent: true,
            },
            {
              textButton: 'Scroll Down',
              externalLinkIcon: false,
              field: [],
              typeComponent: 'component-button',
              enabledComponent: true,
            },
          ],
          typeSection: 'section-hero',
          typeHero: 'hero-home',
          variation: 'fullHd',
          enabledComponent: true,
        },
        {
          backgroundColor: false,
          fields: [
            {
              field: {},
              typeComponent: 'component-subtitle',
              enabledComponent: true,
            },
            {
              field: [
                {
                  image: 'https://pre-cms.w2m.com/dam/Sites/W2FLY/icons/centro-atencion/Covid-19---ATT---Tarifas.svg',
                  backgroundColor: false,
                  altText: 'Covid-19---ATT---Tarifas.svg',
                  description: '<p>Si deseas obtener informaci&oacute;n sobre&nbsp;nuestra respuesta frente al '
                  + 'COVID-19, por favor&nbsp;<a href="/viaje/seguridad/info-covid">haz clic aqu&iacute;'
                  + '</a>.&nbsp;</p>\n',
                  title: 'Covid-19',
                },
                {
                  image: 'https://pre-cms.w2m.com/dam/Sites/W2FLY/icons/centro-atencion/Necesitas-ayuda'
                  + '---Revisa-la-documentación.svg',
                  backgroundColor: false,
                  altText: 'Necesitas-ayuda---Revisa-la-documentación.svg',
                  description: '<p>Si tu consulta es de &iacute;ndole general probablemente encuentres la'
                  + ' respuesta en nuestra secci&oacute;n de preguntas frecuentes.&nbsp;'
                  + '<a href="/preguntas-frecuentes">Haz&nbsp;click&nbsp;aqu&iacute;</a>'
                  + '&nbsp;para comprobarlo.&nbsp;</p>\n',
                  title: '¿Necesitas ayuda?',
                },
                {
                  image: 'https://pre-cms.w2m.com/dam/Sites/W2FLY/icons/centro-atencion/Sobre.svg',
                  backgroundColor: false,
                  altText: 'Sobre.svg',
                  description: '<p>Es informaci&oacute;n sobre los siguientes temas puedes clicar'
                  + ' directamente sobre ellos para acceder a la informaci&oacute;n y los formularios'
                  + ' correspondientes:&nbsp;<a href="/viaje/gestiona-factura">Facturas</a>,&nbsp;'
                  + '<a href="/viaje/pasajeros/menores-formulario">UMs</a>,&nbsp;<a href="/viaje/pasajeros'
                  + '/pasajeros-con-necesidades-especiales">Necesidades especiales&nbsp;(sillas de ruedas,'
                  + 'dispositivos electr&oacute;nicos etc.)</a>.</p>\n\n<p>&nbsp;</p>\n',
                  title: 'Si lo que necesitas',
                },
              ],
              typeComponent: 'component-icons',
              variation: 'is4',
              enabledComponent: true,
              fullwidth: false,
            },
          ],
          typeSection: 'section-icons',
          enabledComponent: true,
          fullwidth: true,
        },
        {
          backgroundColor: true,
          imagePosition: 'left',
          fields: [
            {
              field: {
                hasSeparator: true,
                orientation: 'vertical',
                subtitle: '<p>Si sigues sin encontrar lo que buscas&nbsp;puedes contactar con nosotros a trav&eacute;'
                + '(si has completado tu reserva por favor ten el n&uacute;mero a mano):&nbsp;</p>\n',
                position: 'right',
                title: 'Si sigues sin encontrar lo que buscas',
                fullwidth: false,
              },
              typeComponent: 'component-info-text',
              enabledComponent: true,
            },
            {
              field: {
                image: 'https://pre-cms.w2m.com/.imaging/mte/basic-theme/is9/dam/Sites/W2FLY/Atencion-cliente'
                + '/centro-de-atencion-al-cliente-imagen-1.jpg/jcr:content/'
                + 'centro%20de%20atenci%3Fn%20al%20cliente%20imagen%201.jpg',
                size: 'fulwidth',
                altText: 'centro-de-atencion-al-cliente-imagen-1.jpg',
                borderRadius: {
                  bottomLeft: false,
                  bottomRight: false,
                  topLeft: false,
                  topRight: true,
                },
                variation: 'is9',
                fullwidth: false,
              },
              typeComponent: 'component-image',
              enabledComponent: true,
            },
            {
              borderRadius: {
                bottomLeft: false,
                bottomRight: false,
                topLeft: false,
                topRight: false,
              },
              field: [
                {
                  description: '<p>000 000 000<br />\n<br />\nEl coste de la llamada para llamadas;a es de *****</p>\n',
                  title: 'Teléfono de atención al cliente',
                },
                {
                  description: '<p>consulta a info@world2fly.com<br />\n<br />\n*Responderte en 48h.</p>\n',
                  title: 'Dirección de correo electrónico',
                },
                {
                  description: '<p>Nuestro horario de atenci&oacute;n al cliente es:</p>\n\n<ul>'
                  + '\n\t<li>De lunes a s&aacute;bado&nbsp;</li>\n\t<li>De 9:00 a 21:30h</li>\n</ul>\n',
                  title: 'Nuestros horario de atención',
                },
              ],
              typeComponent: 'component-cards',
              variation: 'is6',
              enabledComponent: true,
              fullwidth: false,
            },
            {
              field: [
                {
                  backgroundColor: false,
                  semidotColor: 'red',
                  semidot: true,
                  title: 'Teléfono de atención al cliente',
                  content: '<ul>\n\t<li>900 92 40 40 para llamadas desde Espa&ntilde;a</li>\n\t<li>'
                  + '(+34) 91 00 03 831 si llamas desde fuera de Espa&ntilde;a</li>\n</ul>\n',
                },
                {
                  backgroundColor: false,
                  buttons: [
                    {
                      textButton: 'Rellenar el formulario',
                      externalLinkIcon: false,
                      field: 'form',
                      textGDPR: '<p>Antes de enviar el formulario, debes leer la Informaci&oacute;n b&aacute;sica'
                      + ' sobre protecci&oacute;n de datos que se encuentra m&aacute;s abajo. Todos los campos'
                      + ' marcados son obligatorios para la contrataci&oacute;n. Al pulsar el bot&oacute;n de'
                      + ' env&iacute;o manifiestas haber le&iacute;do esta informaci&oacute;n.&nbsp;</p>\n\n<p>'
                      + 'Informaci&oacute;n b&aacute;sica sobre privacidad: El responsable del tratamiento de sus'
                      + ' datos es WORLD 2 FLY, S.L.U. La finalidad es la gesti&oacute;n de tu reserva y la'
                      + ' prestaci&oacute;n de los servicios solicitados, fines de gesti&oacute;n contable'
                      + ' y administrativa, cumplimiento de obligaciones legales en materia contable y fiscal,'
                      + ' la operaci&oacute;n del vuelo y el cumplimiento de la normativa de seguridad en vuelos,'
                      + ' aeropuertos y control de fronteras, as&iacute; como la elaboraci&oacute;n de estad&iacute;'
                      + ' sticas an&oacute;nimas a partir de datos agregados de reservas para medir el rendimiento de'
                      + ' nuestras rutas y servicios. Tienes derecho a solicitar el acceso a tus datos personales, su'
                      + ' rectificaci&oacute;n, supresi&oacute;n o portabilidad, la limitaci&oacute;n de su tratamient,'
                      + 'a oponerte al tratamiento, as&iacute; como a presentar una reclamaci&oacute;n ante una'
                      + 'de protecci&oacute;n de datos. + info sobre el tratamiento de tus datos y tus derechos&nbsp;'
                      + '<a href="/politica-privacidad">aqu&iacute;</a>.&nbsp;</p>\n',
                      componentModal: 'component-form-booking',
                    },
                  ],
                  semidotColor: 'turquoise',
                  semidot: true,
                  title: 'Si tu consulta es sobre una reserva',
                  content: '<p>Puedes&nbsp;escribirnos&nbsp;rellenando el siguiente formulario</p>\n',
                },
                {
                  backgroundColor: false,
                  semidotColor: 'blue',
                  semidot: true,
                  title: 'Nuestro horario de atención',
                  content: '<ul>\n\t<li>De lunes a viernes.</li>\n\t<li>Desde las&nbsp;09.00 h&nbsp;'
                  + 'a las 18.00 h (CET)</li>\n</ul>\n',
                },
              ],
              information: '<blockquote>\n<p>* Si necesitas poner una reclamaci&oacute;n, te pedimos'
              + ' las m&aacute;s sinceras disculpas, sentimos las molestias que te hayamos podido causar.'
              + ' En el caso de que tu vuelo se haya visto afectado por un retraso o una cancelaci&oacute;n,'
              + ' puedes enviarnos tu reclamaci&oacute;n a trav&eacute;s de <a href="/reclamaciones">'
              + 'nuestro formulario</a>. En funci&oacute;n del tipo de reclamaci&oacute;n, te informaremos'
              + 'como proceder y te indicaremos la documentaci&oacute;n necesaria.</p>\n</blockquote>\n',
              typeComponent: 'component-cards-text',
              enabledComponent: true,
            },
          ],
          typeSection: 'section-info-image-cards',
          enabledComponent: true,
          fullwidth: true,
        },
      ],
    })
  }
}
