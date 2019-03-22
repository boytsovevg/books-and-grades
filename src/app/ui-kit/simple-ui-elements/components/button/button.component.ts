import { Component, Input } from '@angular/core';

@Component({
  selector: 'bag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() name: string;
  @Input() size: string;
  @Input() type: string;

  @Input() textColor: string;
  @Input() backGroundColor: string;
}
