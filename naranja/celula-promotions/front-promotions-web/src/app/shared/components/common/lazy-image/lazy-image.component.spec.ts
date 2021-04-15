import { WindowService } from './../../../../core/utils/services/window.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyImageComponent } from './lazy-image.component';
import { TranslateModule } from '@ngx-translate/core';
import { TestingModule } from '@testing/utils/utils';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

describe('LazyImageComponent', () => {
  let component: LazyImageComponent;
  let fixture: ComponentFixture<LazyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        ZumoComponentesModule,
        TestingModule,
      ],
      providers: [
        WindowService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
