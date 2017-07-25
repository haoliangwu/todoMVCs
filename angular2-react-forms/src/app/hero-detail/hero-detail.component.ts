import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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

  nameChangeLog: string[] = [];

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.logNameChange()
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
    this.setAddresses(this.hero.addresses);
  }

  createForm() {
    this.heroForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required],
      // address: this.fb.group(new Address()),
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair() {
    this.secretLairs.removeAt(this.secretLairs.length - 1)
  }

  revert() {
    this.ngOnChanges()
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

  onSubmit() {
  this.hero = this.prepareSaveHero();
  // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
  this.ngOnChanges();
  alert('saved hero')
}
}
