import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  onClick(){
    this.btnClick.emit();
  }

}
