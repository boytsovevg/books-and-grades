import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthModel } from '../../models';

@Component({
  selector: 'bag-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() logIn = new EventEmitter<AuthModel>();

  public logInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

}
