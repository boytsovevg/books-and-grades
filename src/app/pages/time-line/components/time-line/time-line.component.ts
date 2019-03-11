import { Component } from '@angular/core';
import { BooksDataService } from '../../../../core/data-services';
import { Observable, of, Subject } from 'rxjs';
import { BookDto } from '../../../../core/data-services/books/dto';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {

  private books$ = new Subject<BookDto[]>();

  private destroy$ = new Subject<void>();

  public timeline$: Observable<Map<string, BookDto[]>> = this.books$
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

          }, new Map()
        )
      )
    ) as Observable<Map<string, BookDto[]>>;

  constructor(
    private booksDataService: BooksDataService
  ) {
    this.booksDataService.getBooks()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(books => this.books$.next(books));
  }

}
