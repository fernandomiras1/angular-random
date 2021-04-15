import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRemoveDomEl]',
})
export class RemoveDomElementDirective implements OnInit {
  constructor(private _el: ElementRef) { }
  ngOnInit() {
    setTimeout(() => {
      this._el.nativeElement.querySelector('p.z-accordion-container__button__title').remove();
    });
  }
}
