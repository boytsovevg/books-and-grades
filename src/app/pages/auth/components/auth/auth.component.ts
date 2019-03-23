import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { AuthDataService } from '../../auth-data.service';
import { AuthType } from '../../enums';
import { AuthModel } from '../../models';

@Component({
  selector: 'grades-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public readonly authType = AuthType;

  public authActive$ = new BehaviorSubject<string>(AuthType.login);

  private destroy$ = new Subject<void>();

  public logIn$ = new Subject<AuthModel>()
    .pipe(
      switchMap((data: AuthModel) => this.authService.logIn(data)),
      takeUntil(this.destroy$)
    );

  public signUp$ = new Subject<AuthModel>()
    .pipe(
      switchMap((data: AuthModel) => this.authService.signUp(data)),
      takeUntil(this.destroy$)
    );

  constructor(
    private authService: AuthDataService,
    private router: Router
  ) {
    this.logIn$.subscribe(data => console.log('log in data: ', data));

    this.signUp$.subscribe(() => this.router.navigateByUrl('/timeline'));
  }
}
