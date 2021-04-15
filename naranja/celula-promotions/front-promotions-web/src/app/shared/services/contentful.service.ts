import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {

  constructor(private http: HttpClient) { }

  async getPage(id: string): Promise<any> {
    return this.get(`${environment.contentful.BASE_URL_BFF}/bff-contentful/page/${id}`, null);
  }

  async getEntry(id: string): Promise<any> {
    return this.get(`${environment.contentful.BASE_URL_BFF}/bff-contentful/entry/${id}`, null);
  }

  async getContentTypes(name: string): Promise<any> {
    let params = new HttpParams();
    params = params.append('content_type', 'page');
    params = params.append('fields.name', name);
    params = params.append('include', '10');

    return this.get(`${environment.contentful.BASE_URL_BFF}/bff-contentful/entries`, params);
  }

  async getFooter(): Promise<any> {
    let params = new HttpParams();
    params = params.append('content_type', 'footer');
    params = params.append('include', '5');
    return this.get(`${environment.contentful.BASE_URL_BFF}/bff-contentful/entries`, params);
  }

  async getSubcategories(): Promise<any> {
    let params = new HttpParams();
    params = params.append('content_type', 'faqSubcategory');
    params = params.append('include', '5');

    return this.get(`${environment.contentful.BASE_URL_BFF}/bff-contentful/entries`, params);
  }

  async getFaqSearch(term?: string): Promise<any> {
    let params = new HttpParams();
    params = params.append('content_type', 'faqItem');
    params = params.append('query', term !== null ? term : '');
    params = params.append('include', '5');

    return this.get(`${environment.contentful.BASE_URL_BFF}/bff-contentful/entries`, params);
  }

  async getFaqTypes(): Promise<any> {
    let params = new HttpParams();
    params = params.append('content_type', 'faqCategory');
    params = params.append('include', '5');

    return this.get(`${environment.contentful.BASE_URL_BFF}/bff-contentful/entries`, params);
  }

  private async get(path: string, params: HttpParams): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        return this.http.get(path, { params }).subscribe(resolve, reject);
      } catch (e) {
        return reject(e);
      }
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class ContentTypeContentResolver implements Resolve<any> {
  constructor(private contentfulService: ContentfulService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    let name = route.routeConfig.path;
    if (route.data.contentful) {
      name = route.data.contentful.name;
    }
    const contentTypes = await this.contentfulService.getContentTypes(name);
    return contentTypes.items[0];
  }
}
