import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl( '' ),
      lastName: new FormControl( '' ),
      email: new FormControl( '' ),
      userName: new FormControl( '' ),
      city: new FormControl( '' ),
      state: new FormControl( '' ),
      zipCode: new FormControl( '' ),
      isAgree: new FormControl( false )
    });
  }

}
