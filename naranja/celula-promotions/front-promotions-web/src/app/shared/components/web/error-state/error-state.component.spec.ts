import { SharedModule } from './../../../shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorStateWebComponent } from './error-state.component';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { WindowService } from '../../../../core/utils/services/window.service';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

describe('ErrorStateComponent', () => {
  let component: ErrorStateWebComponent;
  let fixture: ComponentFixture<ErrorStateWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot(),
        ZumoComponentesModule,
        SharedModule,
        StoreModule.forRoot({}),
      ],
      providers: [WindowService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStateWebComponent);
    component = fixture.componentInstance;
    component.errorStateData = {
      errorTitle: 'Title',
      errorSubtitle: 'subtitle',
      errorBtn: 'btn',
      errorIcon: 'EMPTY_ICON_URL',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true', () => {
    const spy = spyOn(component, 'onClickButton');
    component.onClickButton();
    expect(spy).toHaveBeenCalled();
  });
});
