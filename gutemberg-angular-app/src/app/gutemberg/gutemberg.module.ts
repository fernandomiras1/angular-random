import { CommonModule } from '@angular/common';
import { Injector, NgModule, Optional, SkipSelf } from '@angular/core';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';

import { ViewContainerComponent } from './components/view-container/view-container.component';

// This automatically creates SelectorHookParsers for each listed component:
const componentParsers: Array<HookParserEntry> = [
  // {component: CardSmallComponent},
  // {component: BannerSmallComponent},
  // {component: StickyHeaderComponent},
  // {component: TabsComponent},
  // {component: TabComponent},
  // {component: TitleComponent},
  // {component: ActionCardComponent},
  // {component: LinkItemComponent},
  // {component: AvatarCardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    // forRoot() is used to register global parsers and options
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers
    }),
  ],
  declarations: [
    ViewContainerComponent,
  ],
  exports: [
    ViewContainerComponent,
  ]
})
export class GutembergModule {
  public static injector: Injector;

  constructor(
    @Optional() @SkipSelf() parentModule: GutembergModule,
  ) {
    if (parentModule) {
      throw new Error(
        'GutembergModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
