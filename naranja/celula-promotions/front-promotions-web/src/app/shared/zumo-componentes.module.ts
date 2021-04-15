import { NgModule, ModuleWithProviders } from '@angular/core';
import { NGZCardModule } from '@zumo/core/components/card';
import { NGZSwitchModule } from '@zumo/core/components/switch';
import { NGZListModule } from '@zumo/core/components/list';
import { NGZButtonModule } from '@zumo/core/components/button';
import { NGZLoadingModule } from '@zumo/core/components/loading';
import { NGZCheckboxsModule } from '@zumo/core/components/checkboxs';
import { NGZSelectModule } from '@zumo/core/components/select';
import { NGZTabsModule } from '@zumo/core/components/tabs';
import { NGZDialogModule } from '@zumo/core/components/dialog';
import { NGZMessageModule } from '@zumo/core/components/message';
import { NGZTextfieldModule } from '@zumo/core/components/textfield';
import { ZumoSnackbarModule } from '@zumo/zumo-snackbar';
import { NGZAccordionModule } from '@zumo/core/components/accordion';

@NgModule({
  imports: [
    NGZCardModule.forRoot(),
    NGZSwitchModule.forRoot(),
    NGZListModule.forRoot(),
    NGZButtonModule.forRoot(),
    NGZLoadingModule.forRoot(),
    NGZCheckboxsModule.forRoot(),
    NGZSelectModule.forRoot(),
    NGZTabsModule.forRoot(),
    NGZTextfieldModule.forRoot(),
    ZumoSnackbarModule.forRoot(),
    NGZDialogModule.forRoot(),
    NGZMessageModule.forRoot(),
    NGZAccordionModule.forRoot(),
  ],
  exports: [
    NGZCardModule,
    NGZSwitchModule,
    NGZListModule,
    NGZCheckboxsModule,
    NGZButtonModule,
    NGZLoadingModule,
    NGZSelectModule,
    NGZTabsModule,
    ZumoSnackbarModule,
    NGZDialogModule,
    NGZTextfieldModule,
    NGZMessageModule,
    NGZAccordionModule,
  ],
})
export class ZumoComponentesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZumoComponentesModule,
    };
  }
}
