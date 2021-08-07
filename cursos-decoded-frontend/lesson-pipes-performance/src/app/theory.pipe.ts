import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { TheoryService } from './theory.service';


@Pipe({
  name: 'theory'
})
export class TheoryPipe implements PipeTransform {

  constructor(private theory: TheoryService) {}

  transform(userId: number, property: 'title' | 'userId'): any {
    console.log('Pipe => userId', userId);
    const theory = this.theory.getTheory(userId)

    if (theory) {
      return of(theory[property]);
    }

  }

}
