import { registerLocaleData } from '@angular/common';
import esAR from '@angular/common/locales/es-AR';
import { Component, Input, OnInit } from '@angular/core';
import { IPromo } from '@app/core/models/promo.model';

@Component({
  selector: 'app-legals',
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.scss'],
})
export class LegalsComponent implements OnInit {
  @Input() promo: IPromo;
  @Input() addresses;

  ngOnInit(): void {
    registerLocaleData(esAR, 'es-AR');
  }
}
