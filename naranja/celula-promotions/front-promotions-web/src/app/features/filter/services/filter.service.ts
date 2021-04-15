import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  constructor(
    private http: HttpClient,
  ) { }

  getFilterData() {
    return this.http.get(`${environment.endpoints.BASE_URL_BFF}/data-for-filter`);
  }
}
