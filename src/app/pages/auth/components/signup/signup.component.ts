import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthModel, SignUpModel } from '../../models';

@Component({
  selector: 'bag-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @Output() signUp = new EventEmitter<AuthModel>();

  public signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  public onSubmit({email, password}: SignUpModel): void {
    this.signUp.emit({ email, password });
  }
}
