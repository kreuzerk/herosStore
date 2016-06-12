import {HeroList} from "./hero-list/hero.list.component";
import {CreateHero} from "./create-hero/create.hero.component";
import {Component} from '@angular/core';

@Component({
  selector: 'hero-cmp',
  template: `
        <div class="col-lg-6">
          <create-hero></create-hero>
        </div>
        <div class="col-lg-6">
          <div class="jumbotron">
          <hero-list></hero-list>
          </div>
        </div>
  `,
  directives: [CreateHero, HeroList]
})
export class HeroComponent{}
