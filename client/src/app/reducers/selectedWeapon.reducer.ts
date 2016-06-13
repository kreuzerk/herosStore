import {Weapon} from '../model/weapon';
import {Actions} from '../actions/actions';

export const seletedWeapon = (state: Weapon = null, {type, payload}) => {
  switch(type){
    case Actions.WEAPON_SELECTED.toString():
      return payload;
    default:
      return state;
  }
}
