import { Grade } from '../../../enums';

export interface BookDto {
  id: number;
  title: string;
  author: string;
  url: string;
  grade: Grade;
  type: string;
  pagesNumber: number;
}
