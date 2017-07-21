import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core'

import { CommonModule } from '@angular/common'

import { TitleComponent } from './title/title.component'
import { UserService, UserServiceConfig } from './user.service'

import { HighlightDirective } from './highlight.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent, HighlightDirective],
  exports: [TitleComponent],
  providers: [UserService]
})
export class CoreModule {
  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    }
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
