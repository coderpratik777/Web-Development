import { Component } from '@angular/core';

@Component({
  selector: 'app-lucky-number',
  template: `
    <div class="luckyNumber">
      <button (click)="generate()">Click to generate Lucky number</button>
      <h1 *ngIf="luckyNumber>0">Your lucky number is {{luckyNumber}}</h1>
    </div>
    
  `,
  styles: [  ]
})
export class LuckyNumberComponent {

   luckyNumber!: number;

   generate(){
     this.luckyNumber=Math.ceil(Math.random()*10);
   }

}
