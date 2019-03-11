import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { BooksDataService } from '../../../../core/data-services';

import { BookDto } from '../../../../core/data-services/books/dto';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {

  private books$ = new Subject<BookDto[]>();

  private destroy$ = new Subject<void>();

  public readonly timeline$: Observable<Map<string, BookDto[]>> = this.books$
    .pipe(
      filter(books => !!books.length),
      map(
        (books: BookDto[]) => books.reduce(
          (timelineMap: Map<string, BookDto[]>, book: BookDto) => {

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

          }, new Map<string, BookDto[]>()
        )
      )
    ) as Observable<Map<string, BookDto[]>>;

  public readonly grades$: Observable<string[]> = this.timeline$
    .pipe(
      map((timelineMap: Map<string, BookDto[]>) => Array.from(timelineMap.keys()))
    );

  constructor(
    private booksDataService: BooksDataService
  ) {
    this.booksDataService.getBooks()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(books => this.books$.next(books));
  }

  public getGrades(timeline: Map<string, BookDto[]>): string[] {
    return Array.from(timeline.keys());
  }
}
