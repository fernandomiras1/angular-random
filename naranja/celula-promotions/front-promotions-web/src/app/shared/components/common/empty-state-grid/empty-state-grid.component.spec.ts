import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateGridComponent } from './empty-state-grid.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { WindowService } from '../../../../core/utils/services/window.service';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

describe('EmptyStateGridComponent', () => {
  let component: EmptyStateGridComponent;
  let fixture: ComponentFixture<EmptyStateGridComponent>;

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
    fixture = TestBed.createComponent(EmptyStateGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
