import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>{{ message }}</h1>
  `,
  styles: [
    ` h1{
      color:yellow;
      text-shadow:1px 1px 7px black;
      text-border:2px solid ochre;
    }
    `
  ]
})
export class HelloComponent {

  message: string='Hello everybody';

}
