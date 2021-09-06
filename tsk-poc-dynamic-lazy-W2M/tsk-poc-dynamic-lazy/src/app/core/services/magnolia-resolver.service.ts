import { Injectable } from '@angular/core'
import {
  Resolve, ActivatedRouteSnapshot, Router,
} from '@angular/router'
import { EMPTY, Observable } from 'rxjs'
import { MagnoliaService } from './magnolia.service'

@Injectable({
  providedIn: 'root',
})
export class MagnoliaResolverService implements Resolve<any> {
  constructor(private magnoliaService: MagnoliaService, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any> {
    try {
      return this.magnoliaService.getPage()
    } catch (error) {
      this.router.navigate(['404-error'])
      return EMPTY
    }
  }
}
