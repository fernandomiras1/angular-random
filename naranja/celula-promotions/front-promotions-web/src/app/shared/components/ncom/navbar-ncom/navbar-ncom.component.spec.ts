import { NO_ERRORS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowService } from '@core/utils/services/window.service';
import { NavigationService } from '@shared/services/navigation.service';
import { TestingModule } from '@testing/utils/utils';

import { NavbarNComComponent } from './navbar-ncom.component';

describe('NavbarNComComponent', () => {
  let component: NavbarNComComponent;
  let fixture: ComponentFixture<NavbarNComComponent>;
  let navigationServiceSpy;
  const data = {
    fields: {
      name: 'promociones',
      title: 'Promociones',
      description: 'Promociones',
      canonical: 'https://promociones.naranja.com',
      content: [
        {
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: 'yxlyq25bynna',
              },
            },
            id: '7EeWDFeUTKM0QQcycW0usu',
            type: 'Entry',
            createdAt: '2018-11-20T15:20:09.413Z',
            updatedAt: '2020-05-07T16:58:56.632Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 22,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'nav',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'Navegación',
            login: 'NOL',
            linksMain: [
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '2aMtjYPeicikCQmGKewSsQ',
                  type: 'Entry',
                  createdAt: '2018-11-20T15:35:42.503Z',
                  updatedAt: '2020-04-15T13:43:25.063Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 13,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Tarjetas de crédito',
                  text: 'Tarjetas de crédito',
                  url: '/tarjetas-de-credito',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '1rwkOCj5WQQSiei02soE8e',
                  type: 'Entry',
                  createdAt: '2018-11-20T15:36:09.065Z',
                  updatedAt: '2020-04-15T13:40:05.048Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 8,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Seguros y asistencias',
                  text: 'Seguros y asistencias',
                  url: '/seguros',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: 'VghiPg9EeAWWWOUey6W0G',
                  type: 'Entry',
                  createdAt: '2018-11-20T18:06:01.649Z',
                  updatedAt: '2020-05-04T17:23:26.237Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 9,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Promociones',
                  text: 'Promociones',
                  url: '/para-vos/promociones',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: 'wxdbTxp9QsEkqiISegQmq',
                  type: 'Entry',
                  createdAt: '2018-11-20T18:06:34.224Z',
                  updatedAt: '2020-04-15T13:40:25.602Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 6,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Otros servicios',
                  text: 'Otros servicios',
                  url: '/otros-servicios-naranja',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '4WwX7SR612uCMmEUWyquui',
                  type: 'Entry',
                  createdAt: '2018-11-20T18:07:03.923Z',
                  updatedAt: '2020-04-15T13:40:34.513Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 9,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Comercios Amigos',
                  text: 'Comercios Amigos',
                  url: '/comercios-amigos',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: 'ZLPTnrlN1AH1KsiHPOvN9',
                  type: 'Entry',
                  createdAt: '2020-01-27T18:53:40.558Z',
                  updatedAt: '2020-04-15T13:40:47.810Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 5,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Centro de Ayuda',
                  text: 'Centro de Ayuda',
                  url: '/ayuda',
                },
              },
            ],
            linksTop: [
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: 'ylMFulBsHYmIi0WeEs2qy',
                  type: 'Entry',
                  createdAt: '2018-11-20T18:09:16.145Z',
                  updatedAt: '2020-04-15T13:41:07.363Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 6,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Viajes Naranja',
                  text: 'Viajes Naranja',
                  url: 'https://viajes.naranja.com/',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '6ans2dn5jj5qEEp1djyc6s',
                  type: 'Entry',
                  createdAt: '2019-10-01T11:45:40.780Z',
                  updatedAt: '2020-04-15T13:41:15.877Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Naranja X',
                  text: 'Naranja X',
                  url: 'https://naranjax.com/?utm_source=ncom&utm_medium=referral&utm_campaign=menu-secundario',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: 'fIB63htFiSWkcscGA82Ic',
                  type: 'Entry',
                  createdAt: '2018-11-20T18:09:33.932Z',
                  updatedAt: '2020-04-15T13:41:27.001Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Tienda naranja',
                  text: 'Tienda naranja',
                  url: 'https://tienda.naranja.com/',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '128Tg6KN4GIEaOk6kuG20a',
                  type: 'Entry',
                  createdAt: '2018-11-20T18:09:49.967Z',
                  updatedAt: '2020-04-15T13:41:37.469Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Convivimos',
                  text: 'Convivimos',
                  url: 'https://convivimos.naranja.com/',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '5NFxlBeKxUGs0iCKoAiGmq',
                  type: 'Entry',
                  createdAt: '2018-11-20T18:10:11.076Z',
                  updatedAt: '2020-04-15T13:41:47.164Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'navLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Naranja pos',
                  text: 'Naranja pos',
                  url: 'https://www.naranjapos.com/?utm_source=ncom&utm_medium=header-home',
                },
              },
            ],
            orange: false,
          },
        },
        {
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: 'yxlyq25bynna',
              },
            },
            id: '2tv6nMu17iKYwgSk46sekC',
            type: 'Entry',
            createdAt: '2018-11-21T21:54:45.325Z',
            updatedAt: '2018-11-29T19:14:25.235Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 8,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'footer',
              },
            },
            locale: 'en-US',
          },
          fields: {
            name: 'Footer',
            banner: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'yxlyq25bynna',
                  },
                },
                id: '2vqVobCp4kyqKwasKCguY0',
                type: 'Entry',
                createdAt: '2018-11-21T21:54:34.759Z',
                updatedAt: '2018-12-05T21:04:35.421Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'footerBanner',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                text: 'Tener tarjeta de crédito Naranja es rápido y fácil',
                button: {
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'yxlyq25bynna',
                      },
                    },
                    id: '2VijoSBETS2u6QKcCqGsIM',
                    type: 'Entry',
                    createdAt: '2018-11-21T21:54:29.642Z',
                    updatedAt: '2018-12-04T18:11:33.885Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    contentType: {
                      sys: {
                        type: 'Link',
                        linkType: 'ContentType',
                        id: 'footerButton',
                      },
                    },
                    locale: 'en-US',
                  },
                  fields: {
                    text: '¡Pedila ahora!',
                    url: 'https://solicitatutarjeta.naranja.com/formulario/quiero-mi-naranja.html',
                  },
                },
              },
            },
            sections: [
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '45PkJJD4CIeM0mgOCGCuuQ',
                  type: 'Entry',
                  createdAt: '2018-11-21T21:59:25.518Z',
                  updatedAt: '2020-04-15T14:21:47.901Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Queremos ayudarte',
                  title: 'Queremos ayudarte',
                  elements: [
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '47iVU6TThSM4OwOc08g8Yu',
                        type: 'Entry',
                        createdAt: '2018-11-21T21:59:22.518Z',
                        updatedAt: '2018-12-05T21:04:58.016Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 2,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'phone',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        number: '0810-333-6272',
                      },
                    },
                  ],
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '6rgRy0V6w0gIAmuOa4kkeG',
                  type: 'Entry',
                  createdAt: '2018-11-21T22:01:59.794Z',
                  updatedAt: '2020-04-15T14:30:45.679Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Atención al cliente',
                  title: 'Atención al cliente',
                  elements: [
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '3qceozMdt6CsSmo2m2syGK',
                        type: 'Entry',
                        createdAt: '2018-11-21T22:00:21.836Z',
                        updatedAt: '2020-05-19T17:11:53.613Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 8,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Sucursales',
                        text: 'Sucursales',
                        url: '/sucursales/',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '6y8P2OrH7UM2MYO2cE4KIy',
                        type: 'Entry',
                        createdAt: '2018-11-21T22:00:47.879Z',
                        updatedAt: '2020-04-15T14:24:43.743Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 7,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Contacto',
                        text: 'Contacto',
                        url: '/contacto',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '3D1ooKIrJmm44y8mwM4q82',
                        type: 'Entry',
                        createdAt: '2018-11-21T22:01:06.038Z',
                        updatedAt: '2020-04-15T14:28:38.680Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 7,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Atención a usuarios financieros',
                        text: 'Atención a usuarios financieros',
                        url: '/atencion-usuarios-financieros',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '4O79UCRYtPqvp5A0hfk7iA',
                        type: 'Entry',
                        createdAt: '2019-06-21T19:42:07.015Z',
                        updatedAt: '2020-04-15T14:29:20.295Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 4,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Inversores',
                        text: 'Inversores',
                        url: '/inversores',
                      },
                    },
                  ],
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '2ZplWBL9jqy2WyemKikSMC',
                  type: 'Entry',
                  createdAt: '2018-11-21T22:07:20.697Z',
                  updatedAt: '2020-04-15T14:31:20.030Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Descargá App Naranja',
                  title: 'Descargá App Naranja ',
                  elements: [
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '3f3eCFy076S0mGKcUW42om',
                        type: 'Entry',
                        createdAt: '2018-11-21T22:04:09.183Z',
                        updatedAt: '2018-12-28T18:40:27.069Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 9,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerImageLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        nombre: 'Descarga la aplicación para Android',
                        image: {
                          sys: {
                            space: {
                              sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: 'yxlyq25bynna',
                              },
                            },
                            id: '7KCEyiJJCw8MIosIW8Ws6w',
                            type: 'Asset',
                            createdAt: '2018-12-20T16:41:46.427Z',
                            updatedAt: '2018-12-28T18:37:37.232Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                              },
                            },
                            revision: 2,
                            locale: 'en-US',
                          },
                          fields: {
                            title: 'Descarga la aplicación para Android',
                            file: {
                              // tslint:disable-next-line: max-line-length
                              url: '//images.ctfassets.net/yxlyq25bynna/7KCEyiJJCw8MIosIW8Ws6w/abf7240eefcdbd03de75a0abe0d4c2e1/play-store.png',
                              details: {
                                size: 32156,
                                image: {
                                  width: 833,
                                  height: 200,
                                },
                              },
                              fileName: 'play-store.png',
                              contentType: 'image/png',
                            },
                          },
                        },
                        url: 'https://play.google.com/store/apps/details?id=com.tarjetanaranja.emisor.serviciosClientes.appTitulares',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '4E77OoLHhCK8Ek8ssWiYE2',
                        type: 'Entry',
                        createdAt: '2018-11-21T22:03:23.761Z',
                        updatedAt: '2018-12-28T18:36:54.507Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 7,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerImageLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        nombre: 'Descarga la aplicación para iOS',
                        image: {
                          sys: {
                            space: {
                              sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: 'yxlyq25bynna',
                              },
                            },
                            id: '7pqqMiL4TmaKwOiQWaiKiW',
                            type: 'Asset',
                            createdAt: '2018-12-20T16:42:43.308Z',
                            updatedAt: '2018-12-28T18:37:13.503Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                              },
                            },
                            revision: 2,
                            locale: 'en-US',
                          },
                          fields: {
                            title: 'Descarga la aplicación para App Store',
                            file: {
                              // tslint:disable-next-line: max-line-length
                              url: '//images.ctfassets.net/yxlyq25bynna/7pqqMiL4TmaKwOiQWaiKiW/a892c06d4b250e9aac665f0f7fe2e9ec/app-store_2x_copy.png',
                              details: {
                                size: 24835,
                                image: {
                                  width: 400,
                                  height: 96,
                                },
                              },
                              fileName: 'app-store_2x copy.png',
                              contentType: 'image/png',
                            },
                          },
                        },
                        url: 'https://itunes.apple.com/ar/app/naranja/id1156696044?l=en&mt=8',
                      },
                    },
                  ],
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '6S0SueKpy0ImUIsmS6EEQ4',
                  type: 'Entry',
                  createdAt: '2018-11-22T14:33:49.957Z',
                  updatedAt: '2020-05-22T12:35:59.162Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 6,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Nosotros',
                  title: 'Nosotros',
                  elements: [
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '56n3adat9mOyoIiyc0iu8k',
                        type: 'Entry',
                        createdAt: '2018-11-22T14:32:45.847Z',
                        updatedAt: '2020-04-15T14:34:12.436Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 8,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Casa Naranja',
                        text: 'Casa Naranja',
                        url: '/casa-naranja',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '3r2p0fC9Ow6kSaUQA6oi4e',
                        type: 'Entry',
                        createdAt: '2018-11-22T14:33:02.377Z',
                        updatedAt: '2020-04-15T14:34:45.417Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 6,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Concursos',
                        text: 'Concursos',
                        url: '/concursos',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '5uusMRnY6kwQMC8Eim4Sqm',
                        type: 'Entry',
                        createdAt: '2018-11-22T14:33:22.783Z',
                        updatedAt: '2020-04-15T14:35:37.900Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 6,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Nuestra cultura',
                        text: 'Nuestra cultura',
                        url: '/cultura-naranja',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '7HPY5WlHJm8CkMEwCMWQ6Q',
                        type: 'Entry',
                        createdAt: '2018-11-22T14:33:40.512Z',
                        updatedAt: '2020-04-15T14:36:20.207Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 7,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Trabajá con nosotros',
                        text: 'Trabajá con nosotros',
                        url: '/trabaja-con-nosotros',
                      },
                    },
                    {
                      sys: {
                        space: {
                          sys: {
                            type: 'Link',
                            linkType: 'Space',
                            id: 'yxlyq25bynna',
                          },
                        },
                        id: '1BrzYBFouB6KziHwso2RG2',
                        type: 'Entry',
                        createdAt: '2019-07-11T13:25:09.751Z',
                        updatedAt: '2020-04-15T14:37:35.474Z',
                        environment: {
                          sys: {
                            id: 'master',
                            type: 'Link',
                            linkType: 'Environment',
                          },
                        },
                        revision: 3,
                        contentType: {
                          sys: {
                            type: 'Link',
                            linkType: 'ContentType',
                            id: 'footerLink',
                          },
                        },
                        locale: 'en-US',
                      },
                      fields: {
                        name: 'Sustentabilidad',
                        text: 'Sustentabilidad',
                        url: '/responsabilidad-social',
                      },
                    },
                  ],
                },
              },
            ],
            socialLinks: [
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '3PlnUkmxRm488Acw4G04Gw',
                  type: 'Entry',
                  createdAt: '2018-11-22T14:46:23.632Z',
                  updatedAt: '2018-11-22T14:46:23.632Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'socialMediaLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  text: 'Facebook',
                  image: {
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'yxlyq25bynna',
                        },
                      },
                      id: '47vcW6V1POmkooKMOe0GUG',
                      type: 'Asset',
                      createdAt: '2018-11-22T14:45:01.487Z',
                      updatedAt: '2018-11-22T14:45:01.487Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'Logo Facebook',
                      file: {
                        // tslint:disable-next-line: max-line-length
                        url: '//images.ctfassets.net/yxlyq25bynna/47vcW6V1POmkooKMOe0GUG/3a071249a63ee95fd6ab7cde8363d2f7/iconmonstr-facebook-1.svg',
                        details: {
                          size: 248,
                          image: {
                            width: 24,
                            height: 24,
                          },
                        },
                        fileName: 'iconmonstr-facebook-1.svg',
                        contentType: 'image/svg+xml',
                      },
                    },
                  },
                  url: 'https://www.facebook.com/NaranjaSitioOficial/',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '2CVvttCZusEuWcEYwMIyk0',
                  type: 'Entry',
                  createdAt: '2018-11-22T14:41:10.767Z',
                  updatedAt: '2018-11-22T14:41:10.767Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'socialMediaLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  text: 'Twitter',
                  image: {
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'yxlyq25bynna',
                        },
                      },
                      id: '2LKatnIqEo2g2u8eWqcCWi',
                      type: 'Asset',
                      createdAt: '2018-11-22T14:40:30.095Z',
                      updatedAt: '2018-11-22T14:40:30.095Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'Logo Twitter',
                      file: {
                        url: '//images.ctfassets.net/yxlyq25bynna/2LKatnIqEo2g2u8eWqcCWi/a2f08ed53cc856b2f04b759f468f2310/Twitter_Bird.svg',
                        details: {
                          size: 2046,
                          image: {
                            width: 300,
                            height: 244,
                          },
                        },
                        fileName: 'Twitter_Bird.svg',
                        contentType: 'image/svg+xml',
                      },
                    },
                  },
                  url: 'https://twitter.com/naranja',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '7qDOTmC2Ryk2aeoOgU4ssq',
                  type: 'Entry',
                  createdAt: '2018-11-22T14:50:30.943Z',
                  updatedAt: '2018-11-22T14:50:30.943Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'socialMediaLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  text: 'Instagram',
                  image: {
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'yxlyq25bynna',
                        },
                      },
                      id: '7BQ7uIdUzusW8Woe0cUCmo',
                      type: 'Asset',
                      createdAt: '2018-11-22T14:50:07.187Z',
                      updatedAt: '2019-02-08T17:12:02.208Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'Logo Instagram',
                      file: {
                        url: '//images.ctfassets.net/yxlyq25bynna/7BQ7uIdUzusW8Woe0cUCmo/4571f45ed723342e32c62e87676a8f46/instagram.svg',
                        details: {
                          size: 2086,
                          image: {
                            width: 23,
                            height: 23,
                          },
                        },
                        fileName: 'instagram.svg',
                        contentType: 'image/svg+xml',
                      },
                    },
                  },
                  url: 'https://www.instagram.com/naranja',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '2OU7ernxDaKYc2KAMAsOca',
                  type: 'Entry',
                  createdAt: '2018-11-22T14:52:14.822Z',
                  updatedAt: '2018-11-22T14:52:14.822Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'socialMediaLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  text: 'Youtube',
                  image: {
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'yxlyq25bynna',
                        },
                      },
                      id: '5Ob2ojzjPiIgcWaAoIgS6W',
                      type: 'Asset',
                      createdAt: '2018-11-22T14:52:07.730Z',
                      updatedAt: '2018-11-22T14:52:07.730Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'Logo Youtube',
                      file: {
                        // tslint:disable-next-line: max-line-length
                        url: '//images.ctfassets.net/yxlyq25bynna/5Ob2ojzjPiIgcWaAoIgS6W/5526cd944e43b2a1bc285a9c17f069d1/YouTube_light_icon__2017_.svg',
                        details: {
                          size: 2756,
                          image: {
                            width: 71,
                            height: 50,
                          },
                        },
                        fileName: 'YouTube_light_icon_(2017).svg',
                        contentType: 'image/svg+xml',
                      },
                    },
                  },
                  url: 'https://www.youtube.com/channel/UCMaU6V3NWWnXpdNnM6cirpQ',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '6FV39GCgeWiUySukiYSoOQ',
                  type: 'Entry',
                  createdAt: '2018-11-22T15:32:14.118Z',
                  updatedAt: '2018-11-22T15:32:14.118Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'socialMediaLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  text: 'Linkedin',
                  image: {
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'yxlyq25bynna',
                        },
                      },
                      id: 'ejS1311KqOYw4SmiWWwQ4',
                      type: 'Asset',
                      createdAt: '2018-11-22T14:57:08.236Z',
                      updatedAt: '2018-11-22T14:57:08.236Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'Logo Linkedin',
                      file: {
                        url: '//images.ctfassets.net/yxlyq25bynna/ejS1311KqOYw4SmiWWwQ4/a548b0fe7a7e58728161ff711d85c808/34227.svg',
                        details: {
                          size: 1319,
                          image: {
                            width: 430,
                            height: 430,
                          },
                        },
                        fileName: '34227.svg',
                        contentType: 'image/svg+xml',
                      },
                    },
                  },
                  url: 'https://www.linkedin.com/company/naranja/',
                },
              },
            ],
            subLinks: [
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: 'bqn2k47FXGqOuaeEmo0wq',
                  type: 'Entry',
                  createdAt: '2018-11-22T16:27:54.604Z',
                  updatedAt: '2020-04-15T14:39:08.094Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 6,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Mapa del sitio',
                  text: 'Mapa del sitio',
                  url: '/mapa-del-sitio',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '32Ad4rckaQ0mSKKacem0g8',
                  type: 'Entry',
                  createdAt: '2018-11-22T16:28:08.945Z',
                  updatedAt: '2020-04-15T14:39:38.928Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 8,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Política de privacidad y datos personales',
                  text: 'Política de privacidad y datos personales',
                  url: '/politica-de-privacidad',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '3quNKmvRPqys0E8kM8y8oe',
                  type: 'Entry',
                  createdAt: '2018-11-22T16:28:26.326Z',
                  updatedAt: '2020-04-15T14:40:17.991Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 7,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Política de seguridad',
                  text: 'Política de seguridad',
                  url: '/politica-de-seguridad',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '2KiKVZtBiE6wk24QUO0Aaw',
                  type: 'Entry',
                  createdAt: '2018-11-22T16:28:49.999Z',
                  updatedAt: '2020-04-15T14:41:12.767Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 9,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Política de divulgación responsable',
                  text: 'Política de divulgación responsable',
                  url: '/politica-de-divulgacion-responsable',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '39YUxforzqwguqMu2cWiUw',
                  type: 'Entry',
                  createdAt: '2018-11-22T16:29:10.236Z',
                  updatedAt: '2020-04-15T14:41:29.479Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 7,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Términos y condiciones',
                  text: 'Términos y condiciones',
                  url: '/terminos-y-condiciones',
                },
              },
              {
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'yxlyq25bynna',
                    },
                  },
                  id: '3jTrzCpRCgo0iyyCIuiQmc',
                  type: 'Entry',
                  createdAt: '2018-11-22T16:29:23.982Z',
                  updatedAt: '2020-04-15T14:42:18.789Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 7,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'footerLink',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  name: 'Defensa al consumidor',
                  text: 'Defensa al consumidor',
                  url: '/defensa-al-consumidor',
                },
              },
            ],
            search: {
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: 'yxlyq25bynna',
                  },
                },
                id: '5rttNv6cQ8yMM4MUI2wuye',
                type: 'Entry',
                createdAt: '2018-11-22T16:26:06.702Z',
                updatedAt: '2018-11-22T16:26:06.702Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'search',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                text: 'Buscar en naranja.com',
              },
            },
          },
        },
      ],
    },
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {

    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['exit', 'goBack']);

    TestBed.configureTestingModule({
      imports: [
        TestingModule,
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: NavigationService, useValue: navigationServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { data: { content: data } } } },
        WindowService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exit() should  call navigationService', () => {
    component.exit();
    expect(navigationServiceSpy.exit).toHaveBeenCalled();
  });

  it('goBack() should  call navigationService', () => {
    component.goBack();
    expect(navigationServiceSpy.goBack).toHaveBeenCalled();
  });

  it('should emit true to onOpenFilter()', () => {
    component.onOpenFilter();
    component.openFilter.subscribe(emmitted => expect(emmitted).toBeTruthy());
  });

  it('should be called toggleScroll()', () => {
    const spy = spyOn(component.nav, 'nativeElement');
    component.toggleScroll();
    expect(spy).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNComComponent);
    component = fixture.componentInstance;
    component.data.login = 'NOLCA';
    fixture.detectChanges();
  });

  it('should be called from NOLCA', () => {
    expect(component).toBeTruthy();
  });

  it('should be called scrollLocked', () => {
    const spy = spyOn<any>(component, 'scrollLocked');
    component.toggleScroll();
    expect(spy).toBeTruthy();
  });

  it('should be called scrollLocked', () => {
    const spy = spyOn<any>(component, 'showMenu');
    component.toggleScroll();
    expect(spy).toBeTruthy();
  });

});
