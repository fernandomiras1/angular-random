import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferStateModule } from '@app/core/transfer-state/transfer-state.module';
import { CoreModule } from '@core/core.module';
import { NavigationModule } from '@core/navigation/navigation.module';
import { FilterModule } from '@filter/filter.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { bussinesRuleMock } from '@promotions/mocks/promotions.mocks';
import { PromotionsModule } from '@promotions/promotions.module';
import { SharedModule } from '@shared/shared.module';

import { BussinesRuleDetailWebComponent } from './bussines-rule-detail.component';

describe('BussinesRuleDetailWebComponent', () => {
  let component: BussinesRuleDetailWebComponent;
  let fixture: ComponentFixture<BussinesRuleDetailWebComponent>;
  class RouterStub {
    navigate(url: string) { return; }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BussinesRuleDetailWebComponent],
      imports: [
        CoreModule,
        CommonModule,
        FilterModule,
        SharedModule,
        PromotionsModule,
        NavigationModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        TransferStateModule,
        BrowserTransferStateModule,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '123' } } } },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesRuleDetailWebComponent);
    component = fixture.componentInstance;
    component.rule = bussinesRuleMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
