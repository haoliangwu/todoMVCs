import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [CommonModule, FormsModule, ContactRoutingModule, SharedModule],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
