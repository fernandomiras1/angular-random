import { Component, computed, input, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'reaction-picker',
  template: `
    <ul>
      @for (reaction of reactions(); track $index) {
        <li [class.selected]="isSelected(reaction)"
            (click)="selectedReaction.set(reaction)"
        >{{reaction}}</li>
      }
    </ul>
    <span>Selected: <b>{{selectedReaction() || 'Nothing'}}</b></span>
  `,
})
export class ReactionPicker {
  reactions = input<string[]>([]);

  // El primer parametro es el valor inicial, el segundo es el tipo de dato por eso es un array de strings
  // el es valor que va a regrese el método selectedReaction()
  selectedReaction = linkedSignal<string[], string | null>({
    source: () => this.reactions(),
    computation: (source, previous) => {
      console.log('Previous:', previous);
      return source.find(r => previous?.value === r) || null;
    }
  });


  /**
   * 1 ) Es como el Computed pero nos permite hacer un override
   * del valor inicial.
   * En este caso, queremos que el valor inicial sea el último
   * de la lista de reacciones, o null si no hay reacciones. Pero podemos hacer un set y cambiarlo
   * a otro valor.
   *
   * 2) linkedSignal nos provee ecceso al valor previous value
   */
  // selectedReaction = linkedSignal(() => this.reactions().at(-1) || null);

  protected isSelected(reaction: string){
    return this.selectedReaction() === reaction;
  }
}
