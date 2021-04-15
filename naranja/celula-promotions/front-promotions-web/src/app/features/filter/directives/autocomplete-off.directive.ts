import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutocompleteOff]',
})
export class AutocompleteOffDirective implements OnInit {
  constructor(private _el: ElementRef) { }
  ngOnInit() {
    setTimeout(() => {
      this._el.nativeElement.querySelector('input').setAttribute('autocomplete', 'off');
    });
  }
}
