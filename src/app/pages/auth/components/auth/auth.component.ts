import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthType } from '../../enums';

@Component({
  selector: 'bag-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public readonly authType = AuthType;

  public authActive$ = new BehaviorSubject<string>(AuthType.login);
}
