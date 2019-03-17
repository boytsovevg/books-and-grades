import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { BooksDataService } from '../../../../core/data-services';
import { BookDto, BookProgressDto } from '../../../../core/data-services/books/dto';
import { Grade } from '../../../../core/enums';
import { ProgressUpdateModel } from '../../models';

@Component({
  selector: 'grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  @Input() grade: Grade;
  @Input() books: BookDto[];

  public booksProgress$ = new Subject<BookProgressDto[]>();

  public progressUpdate$ = new Subject<ProgressUpdateModel>()
    .pipe(
      switchMap(
        (progress: ProgressUpdateModel) => this.booksDataService.updateBookProgress(progress)
      )
    );

  private destroy$ = new Subject<void>();

  constructor(
    private booksDataService: BooksDataService
  ) { }

  ngOnInit() {
    this.booksDataService.getBooksProgress(this.books.map(book => book.id))
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((booksProgress: BookProgressDto[]) => this.booksProgress$.next(booksProgress));
  }

}
