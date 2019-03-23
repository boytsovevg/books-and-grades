import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { AuthModel } from './models';

@Injectable()
export class AuthDataService {

  private readonly baseUrl = 'api/v1/auth';

  constructor(
    private http: HttpClient
  ) { }

  public logIn(data: AuthModel): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/login`, { data })
      .pipe(
        shareReplay()
      );
  }

  public signUp(data: AuthModel): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/signup`, { data })
      .pipe(
        shareReplay()
      );
  }

}
