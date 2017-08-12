import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-todo-focus',
  templateUrl: './todo-focus.component.html',
  styleUrls: ['./todo-focus.component.css'],
  styles: [':host { position: relative; bottom: 10%; }'],
  animations: [slideInDownAnimation]
})
export class TodoFocusComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  details: string;
  sending = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    // https://stackoverflow.com/questions/43647411/angular-secondary-routes-cant-navigate-clear-secondary-route-in-the-same-na
    // this.router.navigate([{ outlets: { popup: null } }]);
    this.router.navigate([{ outlets: { primary: ['todos'], popup: null } }]);
  }

}
