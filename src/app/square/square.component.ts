import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button nbButton *ngIf="!value" class="col" aria-label="btnPlay">{{ value }}</button>
      <button nbButton hero status="success" aria-label="btnPlay" *ngIf="value == 'X'">{{ value }}</button>
      <button nbButton hero status="info" aria-label="btnPlay" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
