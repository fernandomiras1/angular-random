import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorStateComponent } from './error-state.component';
import { TranslateModule } from '@ngx-translate/core';
import { LazysizespictureDirective } from '../../../directives/lazysizespicture.directive';
import { WindowService } from '../../../../core/utils/services/window.service';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

describe('ErrorStateComponent', () => {
  let component: ErrorStateComponent;
  let fixture: ComponentFixture<ErrorStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorStateComponent, LazysizespictureDirective],
      imports: [
        TranslateModule.forRoot(),
        ZumoComponentesModule,
      ],
      providers: [WindowService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStateComponent);
    component = fixture.componentInstance;
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
