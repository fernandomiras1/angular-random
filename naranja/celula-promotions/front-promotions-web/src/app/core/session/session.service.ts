import { Injectable } from '@angular/core';
import { IdleSessionService } from './idle-session.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class SessionService {
  readonly keyTokenStorage: string = 'accessToken';
  readonly keyExpiresTime: string = 'expiresAt';
  readonly accountId: string = 'accountId';
  readonly loggedId: string = 'loggedId';
  readonly loggedIdEncode: string = 'loggedIdEncode';
  readonly authType: string = 'authType';
  readonly userType: string = 'userType';
  private readonly sessionTime = 900; // in seconds

  constructor(private idleSessionService: IdleSessionService) { }

  initSessionService() {
    this.idleSessionService.startWatching(this.sessionTime).subscribe((isTimeOut) => {
      if (isTimeOut) {
        this.idleSessionService.stopTimer();
      }
    });
  }

}
