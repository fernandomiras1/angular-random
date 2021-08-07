import { Directive, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[click-stop-propagation]',
})
export class ClickStopPropagationDirective {
  @Input('prevent-default') prevenDefault = true

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (this.prevenDefault) {
      event.preventDefault()
    }
    event.stopPropagation()
  }
}
