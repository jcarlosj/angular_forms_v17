import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userForm: FormGroup;
  isFormSubmitted: boolean = true;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl( '', [ Validators.required ] ),
      lastName: new FormControl( '', [ Validators.required, Validators.minLength( 4 ) ] ),
      userName: new FormControl( '', [ Validators.required, Validators.email ] ),
      city: new FormControl( '' ),
      state: new FormControl( '' ),
      zipCode: new FormControl( '' ),
      isAgree: new FormControl( false )
    });
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;
    debugger;
    console.log( this.userForm.value );

    this.isFormSubmitted = true;
  }

}
