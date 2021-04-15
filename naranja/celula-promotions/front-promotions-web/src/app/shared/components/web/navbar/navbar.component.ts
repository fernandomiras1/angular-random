import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { NavbarComponentBase } from '../../common/navbar/base';
import { defaults } from '../../../../constants/default-elements';
import { NavigationService } from '../../../services/navigation.service';
import { IDialogData, NGZDialogService } from '@zumo/core/components/dialog';

@Component({
  selector: 'app-navbar-web',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarWebComponent extends NavbarComponentBase {

  afterExitSubject$ = new Subject();
  public crossImage = defaults.CROSS_ICON;

  constructor(
    protected navigationService: NavigationService,
    protected router: Router,
    private dialogService: NGZDialogService,
  ) {
    super(navigationService);

    this.afterExitSubject$
      .subscribe(() => this.navigationService.exit());
  }

  goHome() {
    this.router.navigate(['']);
  }

  openDialog($event): void {
    $event.stopPropagation();
    const dialogData: IDialogData = {
      contentIcon: {
        iconName: 'icon-alert',
        colorIcon: '#FFFFFF',
        colorBackground: '#ffb30f',
      },
      actionsButtons: [
        {
          text: 'No, quedarme',
        },
        {
          text: 'Sí, salir',
          onAction: this.afterExitSubject$,
        },
      ],
      title: '¿Querés salir de Promociones?',
      paragraph: '',
    };

    this.dialogService.showDialog(dialogData, null);
  }
}
