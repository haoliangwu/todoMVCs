import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { HighlightDirective } from './highlight.directive';
import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, HeroRoutingModule],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
    HighlightDirective
  ]
})
export class HeroModule { }
