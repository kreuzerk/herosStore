import {Weapon} from '../model/weapon';
import {WeaponActions} from '../actions/weapon.actions';

export const seletedWeapon = (state: Weapon = null, {type, payload}) => {
  switch(type){
    case WeaponActions.WEAPON_SELECTED.toString():
      return payload;
    default:
      return state;
  }
}
