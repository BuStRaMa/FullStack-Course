import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  title = 'Hello World';
  showAddress = true;
  person = {
    name: 'Jhon Doe',
    age: 34,
    address: {
      street: '400 Walnut st',
      city: 'Lynn',
      state: 'MA'
    },
    avatar: 'https://goo.gl/pr1Nov',
    friends: [
      {name: 'Bob', age: 18},
      {name: 'Dean', age: 50},
      {name: 'Mark', age: 24}
    ]
  };

  constructor() {
    this.title = 'User Profile';
  }
}
