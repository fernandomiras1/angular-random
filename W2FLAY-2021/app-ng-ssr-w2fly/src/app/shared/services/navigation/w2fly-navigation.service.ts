import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class W2flyNavigationService {
  constructor(private router: Router) { }
}
