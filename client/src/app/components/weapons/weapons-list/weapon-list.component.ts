import {WeaponService} from "../../../services/weapon.service";
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
        <th></th>
      </tr>
      <tr *ngFor="let weapon of weapons | async" (click)="weaponSelected(weapon)">
        <td>{{ weapon.weaponName }}</td>
        <td>{{ weapon.weaponType }}</td>
        <td><span class="glyphicon glyphicon-trash" (click)="deleteWeapon(weapon.id)" aria-hidden="true"></span></td>
      </tr>
    </table>
  `
})
export class WeaponsList{

  weapons: Observable<Array<Weapon>>;

  constructor(private _store: Store<HeroStore>, private _weaponService: WeaponService){
    this.weapons = this._store.select('weapons');
  }

  deleteWeapon(id: number): void{
    this._weaponService.deleteWeapon(id);
  }

  weaponSelected(weapon: Weapon): void{
    this._weaponService.weaponSelected(weapon);
  }

}
