import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { BookDto } from '../../../../core/data-services/books/dto';
import { Grade } from '../../../../core/enums';

import { ProgressUpdateModel } from '../../models';

@Component({
  selector: 'grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent {

  @Input() grade: Grade;
  @Input() books: BookDto[];

  public progressUpdate$ = new Subject<ProgressUpdateModel>();
}
