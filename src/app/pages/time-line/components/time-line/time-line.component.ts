import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { BooksDataService } from '../../../../core/data-services';

import { BookDto } from '../../../../core/data-services/books/dto';
import { Grade } from '../../../../core/enums';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {

  private books$ = new Subject<BookDto[]>();

  private destroy$ = new Subject<void>();

  public readonly timeline$: Observable<Map<Grade, BookDto[]>> = this.books$
    .pipe(
      filter(books => !!books.length),
      map(
        (books: BookDto[]) => books.reduce(
          (timelineMap: Map<Grade, BookDto[]>, book: BookDto) => {

            if (timelineMap.has(book.grade)) {
              return timelineMap.set(
                book.grade,
                [
                  ...timelineMap.get(book.grade),
                  book
                ]
              );
            }

            return timelineMap.set(book.grade, [book]);

          }, new Map<Grade, BookDto[]>()
        )
      )
    ) as Observable<Map<Grade, BookDto[]>>;

  constructor(
    private booksDataService: BooksDataService
  ) {
    this.booksDataService.getBooks()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(books => this.books$.next(books));
  }

  public getGrades(timeline: Map<Grade, BookDto[]>): Grade[] {
    return Array.from(timeline.keys());
  }
}
