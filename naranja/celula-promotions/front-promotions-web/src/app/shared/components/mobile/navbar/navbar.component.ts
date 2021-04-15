import { Component } from '@angular/core';
import { NavbarComponentBase } from '../../common/navbar/base';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarMobileComponent extends NavbarComponentBase {

  constructor(protected navigationService: NavigationService) {
    super(navigationService);
  }
}
