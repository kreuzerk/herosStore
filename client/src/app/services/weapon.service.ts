import {HeroStore} from "../model/hero.store";
import {Store} from "@ngrx/store";
import {Injectable} from '@angular/core';
import {WeaponActions} from "../actions/weapon.actions";
import {Weapon} from "../model/weapon";

@Injectable()
export class WeaponService{

  constructor(private _store: Store<HeroStore>){}

  addWeapon(payload: Weapon){
    this._store.dispatch({type: WeaponActions.ADD_WEAPON.toString(), payload});
  }
}
