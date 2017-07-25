import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  clickMessage: string = 'abc'

  onClickMe1($event: KeyboardEvent) {
    this.clickMessage = (<HTMLInputElement>$event.target).value
  }

  onClickMe2(msg: string) {
    this.clickMessage = msg
  }

  constructor() { }

  ngOnInit() {
  }

}
