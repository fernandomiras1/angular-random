import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment/environment';


import { View } from '@models/view.model';

@Injectable()
export class ViewEngineService {
  private url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.viewEngine.server;
  }

  createViewTemplate(domain: string, viewId: string, payload: any = null ): Observable<string> {
    return this.getViewDefinitionFromServer(domain, viewId).pipe(
      map(viewDefinition => {
        let viewTemplate = '';
        viewDefinition.components.forEach( componentToRender => {
          switch (componentToRender.type) {
            case 'tabs' : {
              viewTemplate += '<tabs>';
              componentToRender.tabs.forEach(tabToRender => {
                viewTemplate += this.createComponentTemplate(tabToRender);
              });
              viewTemplate += '</tabs>\n';
              break;
            }
            default: {
              viewTemplate += this.createComponentTemplate(componentToRender);
              break;
            }
          }
        });
        return viewTemplate;
      })
    );
  }

  createComponentTemplate(componentToRender: any): string {
    let dataTemplate = '';
    let childComponents = '';
    let visualClues = '';
    Object.keys(componentToRender).forEach( key => {
      switch (key) {
        case 'components': {
          componentToRender.components.forEach(childComponent => childComponents += this.createComponentTemplate(childComponent));
          break;
        }
        case 'visualClues': {
          dataTemplate += `${key}: '${componentToRender[key]}', `;
          visualClues = componentToRender[key];
          break;
        }
        case 'actions': {
          dataTemplate += `${key}: ${this.stringify(componentToRender[key])}, `;
          break;
        }
        case 'type': break;
        default: {
          if ( this.isString(componentToRender[key])) {
            dataTemplate += `${key}: '${componentToRender[key]}', `;
          } else {
            dataTemplate += `${key}: ${componentToRender[key]}, `;
          }
          break;
        }
      }
    });
    dataTemplate = dataTemplate.slice( 0, -2); // remove last ', '
    return `
<${componentToRender.type} [data]="{${dataTemplate}}" ${ visualClues === '' ? '' : 'class="' + visualClues + '"' }>
  ${childComponents}
</${componentToRender.type}>\n`;
  }

stringify(objFromJson: any): string {
  if (typeof objFromJson !== 'object') {
      // not an object, stringify using native function
      return JSON.stringify(objFromJson).replace(/\"/g, '\'');
  }

  if (Array.isArray(objFromJson)) {
    let returnValue = '';
    objFromJson.forEach(item => returnValue += this.stringify(item) + ',');
    return `[${returnValue.slice(0, -1)}]`;
  }

  // Implements recursive object serialization according to JSON spec
  // but without quotes around the keys.
  let props = Object
      .keys(objFromJson)
      .map(key => ` ${key}: ${this.stringify(objFromJson[key])}`)
      .join(',');
  return `{${props}}`;
}
  getViewDefinitionFromServer(domain: string, viewId: string): Observable<View> {
    return this.httpClient.get<View>(`${this.url}/${domain}/${viewId}`);
    // return of(
    //   {
    //     domain: 'cards',
    //     id : 'cards-list',
    //     title: 'Naranja Gutemberg',
    //     components: [
    //       {
    //         type: 'tabs',
    //         tabs: [
    //           {
    //             type: 'tab',
    //             title: 'Adrian',
    //             active: true,
    //             components: [
    //               {
    //                 type: 'title',
    //                 title: 'Activas'
    //               },
    //               {
    //                 type: 'card-small',
    //                 id: 'gAAAAABfUoLzVdzMzMijjM-pQzzoF7L0xYVWKjE-GCfQl04kx3bdfc5uUmSOK_V2O0wJll7EA_e550zlTxD7v73djsKAlMolxakywS0DO7HI6KT2_nxuLeU=',
    //                 image: './assets/card-3.svg',
    //                 title: 'Naranja',
    //                 subTitle: '**** **** **** 5448',
    //                 actions: [
    //                   {
    //                     event: 'click',
    //                     action: 'show-view',
    //                     payload: {
    //                       domain: 'cards',
    //                       id: 'card-detail',
    //                       cardId: 'gAAAAABfUoLzVdzMzMijjM-pQzzoF7L0xYVWKjE-GCfQl04kx3bdfc5uUmSOK_V2O0wJll7EA_e550zlTxD7v73djsKAlMolxakywS0DO7HI6KT2_nxuLeU='
    //                     }
    //                   }
    //                 ]
    //               },
    //               {
    //                 type: 'card-small',
    //                 id: 'gAAAAABfUoLzfz7O_g6ovUxq4vnYbg9bJf7NDT8yhDh9wj51HlTOgbwHfhAEanGfz-4lV-BS0DIxxcSKVXebzJTw-p0UU-nF15VOhuzF7ETMye3o_lwFbc4=',
    //                 image: '../assets/card-4.svg',
    //                 title: 'Naranja Virtual',
    //                 subTitle: '**** **** **** 0590',
    //                 actions: [
    //                   {
    //                     event: 'click',
    //                     action: 'show-view',
    //                     payload: {
    //                       domain: 'cards',
    //                       id: 'card-detail',
    //                       cardId: 'gAAAAABfUoLzfz7O_g6ovUxq4vnYbg9bJf7NDT8yhDh9wj51HlTOgbwHfhAEanGfz-4lV-BS0DIxxcSKVXebzJTw-p0UU-nF15VOhuzF7ETMye3o_lwFbc4=',
    //                     }
    //                   }
    //                 ]
    //               },
    //               {
    //                 type: 'card-small',
    //                 id: 'gAAAAABfUoLzhMneaRyswiu0anYA-JZobVZtyOEZGZNTvcdlx811GPAkBcOHL64KPRlsFZ8opu_6y1ikJ2H4IYOh3ucZki5NocSmZBZ7_Jp11C80k8wQB40=',
    //                 image: '../assets/card-22.svg',
    //                 title: 'Naranja Visa',
    //                 subTitle: '**** **** **** 7662',
    //                 actions: [
    //                   {
    //                     event: 'click',
    //                     action: 'show-view',
    //                     payload: {
    //                       domain: 'cards',
    //                       id: 'card-detail',
    //                       cardId: 'gAAAAABfUoLzhMneaRyswiu0anYA-JZobVZtyOEZGZNTvcdlx811GPAkBcOHL64KPRlsFZ8opu_6y1ikJ2H4IYOh3ucZki5NocSmZBZ7_Jp11C80k8wQB40=',
    //                     }
    //                   }
    //                 ]
    //               },
    //               {
    //                 type: 'action-card',
    //                 icon: 'icon-card',
    //                 title: 'Podes pedir otras tarjetas',
    //                 urlText: 'Ver tarjetas',
    //                 url: '#',
    //               },
    //               {
    //                 type: 'link-item',
    //                 postLinkText: 'la cuenta',
    //                 linkText: 'Dar de baja',
    //                 linkUrl: '#',
    //                 visualClues: ['bottomContainer', 'centerContent']
    //               }
    //             ]
    //           },
    //           {
    //             type: 'tab',
    //             title: 'Adicionales',
    //             active: false,
    //             components: [
    //               {
    //                 type: 'title',
    //                 title: 'Activas de adicionales'
    //               },
    //             ]
    //           },
    //         ]
    //       }
    //       // {
          //    type: 'sticky-header',
          //    title: 'Naranja Gutemberg',
          //    subTitle: ''
          // },
          // {
          //     type: 'card-small',
          //     id: 'gAAAAABfUoLzVdzMzMijjM-pQzzoF7L0xYVWKjE-GCfQl04kx3bdfc5uUmSOK_V2O0wJll7EA_e550zlTxD7v73djsKAlMolxakywS0DO7HI6KT2_nxuLeU=',
          //     image: './assets/card-3.svg',
          //     title: 'Naranja',
          //     subTitle: '**** **** **** 5448'
          // },
          // {
          //     type: 'card-small',
          //     id: 'gAAAAABfUoLzfz7O_g6ovUxq4vnYbg9bJf7NDT8yhDh9wj51HlTOgbwHfhAEanGfz-4lV-BS0DIxxcSKVXebzJTw-p0UU-nF15VOhuzF7ETMye3o_lwFbc4=',
          //     image: '../assets/card-4.svg',
          //     title: 'Naranja Virtual',
          //     subTitle: '**** **** **** 0590'
          // },
          // {
          //   type: 'banner-small',
          //   title: 'Ahora podes hacer tus compras 100% online con tu',
          //   subTitle: 'Naranja Virtual'
          // },
          // {
          //     type: 'card-small',
          //     id: 'gAAAAABfUoLzhMneaRyswiu0anYA-JZobVZtyOEZGZNTvcdlx811GPAkBcOHL64KPRlsFZ8opu_6y1ikJ2H4IYOh3ucZki5NocSmZBZ7_Jp11C80k8wQB40=',
          //     image: '../assets/card-22.svg',
          //     title: 'Naranja Visa',
          //     subTitle: '**** **** **** 7662'
          // }
        // ]
    // });
  }

  isString (value: any): boolean {
    return typeof value === 'string' || value instanceof String;
  }
}
