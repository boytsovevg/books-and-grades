import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'book-progress',
  templateUrl: './book-progress.component.html',
  styleUrls: ['./book-progress.component.scss']
})
export class BookProgressComponent {

  @Input() pagesProgress: number;
  @Input() bookPagesCount: number;
  @Output() progressUpdate = new EventEmitter<number>();

  public updateProgress(pages: string): void {
    const pagesCount = parseInt(pages, 10);

    this.progressUpdate.emit(isNaN(pagesCount) ? 0 : pagesCount);
  }
}
