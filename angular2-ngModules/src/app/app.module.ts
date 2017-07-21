import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

/* App Root */
import { AppComponent } from './app.component'
import { HighlightDirective } from './highlight.directive'
import { TitleComponent } from './title/title.component'
import { UserService } from './user.service'

/* Contact Imports */
import { ContactModule } from './contact/contact.module'

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, ContactModule, AppRoutingModule],
  declarations: [AppComponent, HighlightDirective, TitleComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
