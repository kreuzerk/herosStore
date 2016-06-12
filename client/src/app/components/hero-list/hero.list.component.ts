import {Store} from "@ngrx/store";
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Hero} from "../../model/hero.model";
import {HeroStore} from "../../model/hero.store";

@Component({
  selector: 'hero-list',
  template: `
      <table class="table">
        <tr>
          <th>Heros Name</th>
          <th>Heros skill</th>
        </tr>
        <tr *ngFor="let hero of heroes | async">
          <td>{{ hero.heroName }}</td>
          <td>{{ hero.heroSkill }}</td>
        </tr>
      </table>
  `
})
export class HeroList{
    heroes: Observable<Array<Hero>>;

    constructor(private store: Store<HeroStore>){
        this.heroes = this.store.select('heroes');
    }
}
