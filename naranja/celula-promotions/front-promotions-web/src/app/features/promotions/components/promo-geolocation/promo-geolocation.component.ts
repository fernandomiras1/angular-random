import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ILocation } from '@core/models/geo-location.model';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { TranslateService } from '@ngx-translate/core';
import { GeocodingService } from '@shared/services/geocoding.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-promo-geolocation',
  templateUrl: './promo-geolocation.component.html',
  styleUrls: ['./promo-geolocation.component.scss'],
})
export class PromoGeolocationComponent implements OnInit, OnDestroy {

  constructor(
    private geocodingService: GeocodingService,
    private translate: TranslateService,
    private navigatorService: NavigatorService,
  ) { }

  location: ILocation;
  loading = false;
  error;
  geolocationText;
  locationActive = false;
  locationActiveSubject: Subject<boolean> = new Subject();
  private subscriptions: Subscription[] = [];
  @Output() locationFetched = new EventEmitter<ILocation>();
  @Output() locationBlocked = new EventEmitter();

  ngOnInit() {
    this.geolocationText = this.translate.instant('PAGES.GEOLOCATION.USE_LOCATION');
    this.checkStorage();
    this.subscriptions.push(this.locationActiveSubject.subscribe((active) => {
      if (active) {
        this.checkStorage();
      } else {
        this.locationFetched.emit(this.location);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions
      .forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  refreshLocation() {
    this.loading = true;
    this.subscriptions.push(
      this.translate.get('PAGES.GEOLOCATION.SEARCHING')
        .subscribe((translated: string) => this.geolocationText = translated),
    );

    this.subscriptions.push(
      this.geocodingService.getCurrentPosition().subscribe(
        (location) => {
          this.location = location;
          this.locationActive = true;
          localStorage.setItem('NpromoGeolocation', JSON.stringify(location));
          this.geolocationText = `${this.location.locality}, ${this.location.province}`;
          this.locationFetched.emit(this.location);
          this.loading = false;
        },
        (err) => {
          this.subscriptions.push(
            this.translate.get('PAGES.GEOLOCATION.USE_LOCATION').subscribe((translated: string) => {
              this.geolocationText = translated;
            }),
          );
          this.locationActive = false;
          localStorage.removeItem('NpromoGeolocation');
          this.location = null;
          this.locationBlocked.emit();
          this.loading = false;
          this.error = err;
        }),
    );
  }

  toggleLocation(emmit = true) {

    this.locationActive = !this.locationActive;
    if (!this.locationActive) {
      this.subscriptions.push(
        this.translate.get('PAGES.GEOLOCATION.USE_LOCATION').subscribe((translated: string) => {
          this.geolocationText = translated;
        }),
      );
      localStorage.removeItem('NpromoGeolocation');
      this.location = null;
    }
    if (emmit) {
      this.locationActiveSubject.next(this.locationActive);
    }

  }

  checkStorage() {
    if (this.navigatorService.isBrowser) {
      const exist = localStorage.getItem('NpromoGeolocation');
      if (exist) {
        const locationString = exist;
        this.location = JSON.parse(locationString);
        this.geolocationText = `${this.location.locality}, ${this.location.province}`;
        this.locationActive = true;
      } else {
        if (this.locationActive) {
          this.refreshLocation();
        }
      }
    }
  }
}
