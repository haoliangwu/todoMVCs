import { Component } from '@angular/core';
import { heroes, Hero } from './hero-detail/data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes: Hero[] = heroes
  selectedHero: Hero = heroes[0]

  selectHero(hero) {
    this.selectedHero = hero
  }
}
