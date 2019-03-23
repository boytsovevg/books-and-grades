import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthModel } from './models';

@Injectable()
export class AuthDataService {

  public logIn(data: AuthModel): Observable<unknown> {
    return of(data);
  }

  public signUp(data: AuthModel): Observable<unknown> {
    return of(data);
  }

}
