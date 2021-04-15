import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LazysizesDirective } from '@app/shared/directives/lazysizes.directive';
import { LazysizespictureDirective } from '@app/shared/directives/lazysizespicture.directive';

import { FooterNComComponent } from './footer-ncom.component';

const searchFormParams = {
  value: {
    q: 'Tarjetas',
  },
  navigate: '/ayuda/busqueda',
};

describe('FooterComponent', () => {
  let component: FooterNComComponent;
  let fixture: ComponentFixture<FooterNComComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [FooterNComComponent, LazysizespictureDirective, LazysizesDirective],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
    });

    fixture = TestBed.createComponent(FooterNComComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    const data = {
      banner: {
        fields: {
          text: 'Tener tarjeta de crédito Naranja es rápido y fácil',
          button: {
            fields: {
              text: '¡Pedila ahora!',
              url: 'https://solicitatutarjeta.naranja.com/formulario/quiero-mi-naranja.html',
            },
          },
        },
      },
      sections: [
        {
          fields: {
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
                  url: '//images.ctfassets.net/3a071249a63ee95fd6ab7cde8363d2f7/iconmonstr-facebook-1.svg',
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
            updatedAt: '2019-07-03T15:48:18.734Z',
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
            text: 'Mapa del sitio',
            url: '/mapa-del-sitio',
          },
        },
      ],
      isOnline: true,
    };
    component.data = data;
    fixture.detectChanges();
  });
  // TODO ver UT's
  xit('El isConnected tiene que ser true', () => {
    expect(component.isConnected).toBe(true);
  });

  xit('El isOnline tiene que ser true', () => {
    expect(component.data.isOnline).toBe(true);
  });

  xit('Si redirecciona al centro de ayuda', () => {
    component.searchForm(searchFormParams);
    expect(searchFormParams.navigate).toContain('/ayuda/busqueda');
  });

  xit('Si el data es vacio', () => {
    component.data = null;
    component.ngOnInit();
    expect(component.data).toBe(null);
  });

});
