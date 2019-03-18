import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { BooksDataService } from '../../../../core/data-services';
import { BookDto, BookProgressDto } from '../../../../core/data-services/books/dto';
import { Grade } from '../../../../core/enums';

import { BookProgressModel } from '../../models';

@Component({
  selector: 'grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  @Input() grade: Grade;
  @Input() books: BookDto[];

  public booksProgress$ = new Subject<BookProgressDto[]>();
  public progressUpdate$ = new Subject<BookProgressModel>();

  private destroy$ = new Subject<void>();

  constructor(
    private booksDataService: BooksDataService
  ) {
    this.progressUpdate$
      .pipe(
        takeUntil(this.destroy$),
        switchMap((progress: BookProgressModel) => this.booksDataService.updateBookProgress(progress))
      )
      .subscribe(result => console.log(result));
  }

  ngOnInit() {
    this.booksDataService.getBooksProgress(this.books.map(book => book.id))
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((booksProgress: BookProgressDto[]) => this.booksProgress$.next(booksProgress));
  }

}
