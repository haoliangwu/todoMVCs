import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { TitleComponent } from './title/title.component'
import { UserService } from './user.service'
import { ContactComponent } from './contact/contact.component'
import { HighlightDirective } from './hightlight.directive'
import { ContactModule } from './contact/contact.module'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContactModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
