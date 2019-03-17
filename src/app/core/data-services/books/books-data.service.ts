import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProgressUpdateModel } from '../../../pages/time-line/models';

import { BookDto, BookProgressDto } from './dto';

@Injectable()
export class BooksDataService {

  private readonly baseUrl = 'api/books';

  constructor(
    private http: HttpClient
  ) { }

  public getBooks(): Observable<BookDto[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<BookDto[]>;
  }

  public updateBookProgress(progress: ProgressUpdateModel): Observable<unknown> {
    return this.http.patch(`${this.baseUrl}/${progress.id}/progress/update`, { progress });
  }

  public getBooksProgress(bookIds: number[]): Observable<BookProgressDto[]> {
    const params = new HttpParams();

    bookIds.forEach(
      id => params.append('ids', id.toString())
    );

    return this.http.get(`${this.baseUrl}/progress`, { params }) as Observable<BookProgressDto[]>;
  }
}
