import {Weapon} from "../../../../model/weapon";
import {Observable} from "rxjs/Observable";
import {HeroStore} from "../../../../model/hero.store";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/filter';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'armedweapon',
  template: `
    <b>{{ weapon.weaponName }}</b> {{ weapon.weaponType }}
  `
})
export class ArmedWeaponComponent implements OnInit{

  @Input() weaponId: number;
  weapon: Weapon;

  constructor(private _store: Store<HeroStore>){}

  ngOnInit(){
    this._store.select('weapons').subscribe(weapons => {
      this.weapon = weapons.filter(weapon => weapon.id === this.weaponId)[0];
    })
  }
}
