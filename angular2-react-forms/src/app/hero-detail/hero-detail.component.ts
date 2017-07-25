import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states, Address, Hero } from './data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero
  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  createForm() {
    this.heroForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }
}
