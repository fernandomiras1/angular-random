import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly users = [
    { id: 1, name: 'Rodrigo Vidales'},
    { id: 2, name: 'Fer Miras'},
  ]

  constructor() { }

}
