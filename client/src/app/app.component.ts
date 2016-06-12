import {BodyComponent} from "./components/body/body.component.ts";
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <nav class="navbar navbar-inverse">
      <h1 class="navbar-brand">HerosStore</h1>
    </nav>
    <div class="row">
      <body-cmp></body-cmp>
    </div>
  `,
  directives: [BodyComponent]
})
export class AppComponent {
}
