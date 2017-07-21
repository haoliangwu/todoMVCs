import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';

import { AwesomePipe } from './awesome.pipe';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [CommonModule, FormsModule, ContactRoutingModule],
  declarations: [ContactComponent, HighlightDirective, AwesomePipe],
  providers: [ContactService]
})
export class ContactModule { }
