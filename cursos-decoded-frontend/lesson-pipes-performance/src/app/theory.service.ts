import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheoryService {

  theories = [
    { title: 'Angular Curso Pipes', userId: 1 },
    { title: 'Futter Curso Mobile', userId: 2 },
  ]

  constructor() { }

  getTheory(userId: number) {
    return this.theories.find(t => t.userId === userId)
  }

}
