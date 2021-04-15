import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-tabs',
  templateUrl: './routing-tabs.component.html',
  styleUrls: ['./routing-tabs.component.scss'],
})
export class RoutingTabsComponent implements OnInit {
  @Input() title = 'Promociones';
  @Input() showBackButton = false;
  @Input() filter = true;

  public nearestActive = false;
  public allActive = false;

  @Output() openFilter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit() {

    const active = this.router.url.replace('/', '');

    switch (active) {
      case 'cerca-tuyo':
        this.nearestActive = true;
        break;

      case 'todas':
        this.allActive = true;
        break;
    }
  }

  onTabClick(event) {
    const clickedTab = event.target.innerText.trim().toLowerCase().replace(' ', '-');
    this.router.navigate([`/${clickedTab}`]);
  }

  onOpenFilter() {
    this.openFilter.emit(true);
  }
}
