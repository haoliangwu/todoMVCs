import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero
  heroes: Hero[]

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(res => {
      this.heroes = res
    })
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
