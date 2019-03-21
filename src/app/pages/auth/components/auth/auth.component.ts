import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthType } from '../../enums';

@Component({
  selector: 'bag-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public authActive$ = new BehaviorSubject<string>(AuthType.login);

  public readonly authType = AuthType;

  constructor() { }

  ngOnInit() {
  }

}
