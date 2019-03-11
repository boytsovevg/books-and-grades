import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDto } from './dto';
import { Observable } from 'rxjs';

@Injectable()
export class BooksDataService {

  private readonly baseUrl = 'api/books';

  constructor(
    private http: HttpClient
  ) { }

  public getBooks(): Observable<BookDto[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<BookDto[]>;
  }
}
