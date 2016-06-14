import {ArmedWeaponComponent} from "./armedherorow/armedweapon.component";
import {Observable} from "rxjs/Observable";
import {ArmedHeroComponent} from "./armedherorow/armedhero.component";
import {ArmedHero} from "../../../model/armedHero.model";
import {HeroStore} from "../../../model/hero.store";
import {Store} from "@ngrx/store";
import {Component} from '@angular/core';

@Component({
  selector: 'armedhero-list',
  template: `
    <table class="table">
      <tr>
        <th>Hero</th>
        <th>Weapon</th>
      </tr>
      <tr *ngFor="let armedhero of armedHeroes | async">
        <td><armedhero [heroid]="armedhero.heroId"></armedhero></td>
        <td><armedweapon [weaponId]="armedhero.weaponId"></armedweapon></td>
      </tr>
    </table>
  `,
  directives: [ArmedHeroComponent, ArmedWeaponComponent]
})
export class ArmedHeroList{

  armedHeroes: Observable<Array<ArmedHero>>;

  constructor(private _store: Store<HeroStore>){
    this.armedHeroes = this._store.select('armedHero');
  }
}
