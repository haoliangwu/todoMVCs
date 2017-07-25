import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero-detail/data-model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @Input() heroes: Hero[]
  @Output() selectHero = new EventEmitter<Hero>()

  constructor() { }

  ngOnInit() {
  }

  handleSelect(hero) {
    this.selectHero.emit(hero)
  }
}
