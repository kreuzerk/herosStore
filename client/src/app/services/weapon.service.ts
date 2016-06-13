import {HeroStore} from "../model/hero.store";
import {Store} from "@ngrx/store";
import {Injectable} from '@angular/core';
import {Actions} from "../actions/actions";
import {Weapon} from "../model/weapon";

@Injectable()
export class WeaponService{

  constructor(private _store: Store<HeroStore>){}

  addWeapon(payload: Weapon): void{
    this._store.dispatch({type: Actions.ADD_WEAPON.toString(), payload});
  }

  deleteWeapon(payload: number): void{
    this._store.dispatch({type: Actions.DELETE_WEAPON.toString(), payload});
  }

  weaponSelected(payload: Weapon): void{
    this._store.dispatch({type: Actions.WEAPON_SELECTED.toString(), payload});
  }

  updateWeapon(payload: Weapon): void{
    this._store.dispatch({type: Actions.UPDATE_WEAPON.toString(), payload});
  }
}
