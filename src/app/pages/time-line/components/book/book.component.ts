import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BookDto } from '../../../../core/data-services/books/dto';
import { ProgressUpdateModel } from '../../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: BookDto;
  @Output() progressUpdate = new EventEmitter<ProgressUpdateModel>();

  public showProgress$ = new Subject<boolean>();

  public updateBookProgress(pagesCount: number): void {
    this.progressUpdate.emit({ id: this.book.id, pagesCount });
  }
}
