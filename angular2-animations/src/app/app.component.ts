import { Component } from '@angular/core'
import { Hero } from './animate/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heros: Array<Hero> = [
    new Hero('foo'),
    new Hero('baz'),
    new Hero('bar')
  ]
}
