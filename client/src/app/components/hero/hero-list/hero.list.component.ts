import {HeroService} from "../../../services/hero.service";
import {Store} from "@ngrx/store";
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Hero} from "../../../model/hero.model";
import {HeroStore} from "../../../model/hero.store";

@Component({
  selector: 'hero-list',
  template: `
      <table class="table">
        <tr>
          <th>Heros Name</th>
          <th>Heros skill</th>
          <th></th>
        </tr>
        <tr *ngFor="let hero of heroes | async" (click)="heroSelected(hero)">
          <td>{{ hero.heroName }}</td>
          <td>{{ hero.heroSkill }}</td>
          <td><span class="glyphicon glyphicon-trash" (click)="deleteHero(hero.id)" aria-hidden="true"></span></td>
        </tr>
      </table>
  `
})
export class HeroList{
    heroes: Observable<Array<Hero>>;

    constructor(private _heroService: HeroService, private store: Store<HeroStore>){
      this.heroes = this.store.select('heroes');
    }

    deleteHero(id: number): void{
      this._heroService.deleteHero(id);
    }

    heroSelected(hero: Hero): void{
      this._heroService.heroSelected(hero);
    }
}
