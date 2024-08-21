import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Subject, fromEvent, map, merge, scan } from 'rxjs';
import { AsyncPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-page-click-counter-bad-practice',
  standalone: true,
  imports: [AsyncPipe, NgStyle, MatButtonModule],
  template: ` <section class="app-description">
      <div>
        <h1>Page Click Visualizer</h1>
        <p>Start clicking around the page...</p>
      </div>
    </section>
    <div>
      <button
        (click)="clickEvents = []; $event.stopPropagation()"
        mat-stroked-button
      >
        Reset State
      </button>
    </div>
    @for (click of clickEvents; track $index) {
    <div
      [style.left.px]="click.clientX"
      [style.top.px]="click.clientY"
      class="click"
    ></div>
    }`,
})
export class PageClickCounterBadPracticeComponent {
  // Aqui estamos usado un push para ir agregando los estados del ckick, en el otro ejemplo esto se cambia por rxjs scan
  clicks$ = fromEvent<PointerEvent>(document, 'click').subscribe((event) => {
    this.clickEvents.push(event);
  });

  clickEvents: PointerEvent[] = [];
}
