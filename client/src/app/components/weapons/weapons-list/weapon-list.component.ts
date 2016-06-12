import {Weapon} from "../../../model/weapon";
import {Observable} from "rxjs/Observable";
import {HeroStore} from "../../../model/hero.store";
import {Store} from "@ngrx/store";
import {Component} from '@angular/core';

@Component({
  selector: 'weapons-list',
  template: `
    <table class="table">
      <tr>
        <th>Weapon Name</th>
        <th>Weapon Type</th>
      </tr>
      <tr *ngFor="let weapon of weapons | async">
        <td>{{ weapon.weaponName }}</td>
        <td>{{ weapon.weaponType }}</td>
      </tr>
    </table>
  `
})
export class WeaponsList{

  weapons: Observable<Array<Weapon>>;

  constructor(private _store: Store<HeroStore>){
    this.weapons = this._store.select('weapons');
  }

}
