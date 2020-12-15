import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  selectedClass = 'phone-320';
  selectedView = { domain: 'cards', viewId: 'cards-list', title: 'list of cards', selected: true};


  screenSizes = [
    { class: 'phone-320', text: 'small 320 x 568', selected: true},
    { class: 'phone-360', text: 'medium 360 x 640', selected: false},
    { class: 'phone-414', text: 'big 414 x 896', selected: false},
  ];

  constructor() {}

  selectSize(item: any): void {
    this.screenSizes.forEach(size => size.selected = (item.class === size.class));
    this.selectedClass = item.class;
  }

}
