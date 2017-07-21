import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core'

import { CommonModule } from '@angular/common'

import { TitleComponent } from './title/title.component'
import { UserService } from './user.service'

import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent, HighlightDirective],
  exports: [TitleComponent],
  providers: [UserService]
})
export class CoreModule {
}
