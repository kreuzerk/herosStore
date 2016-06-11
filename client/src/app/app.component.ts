import {BodyComponent} from "./components/body/body.component.ts";
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <div class="jumbotron">
      <h3>My favorite heros</h3>
    </div>
    <div class="row">
      <body-cmp></body-cmp>
    </div>
  `,
  directives: [BodyComponent]
})
export class AppComponent {
}
