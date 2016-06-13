import {WeaponActions} from "../actions/weapon.actions";
import {Weapon} from "../model/weapon";

export const weapons = (state: Array<Weapon> = [], {type, payload}) => {
    switch(type){
      case WeaponActions.ADD_WEAPON.toString():
        return [...state, payload];
      case WeaponActions.DELETE_WEAPON.toString():
        return state.filter(weapon => weapon.id !== payload);
      case WeaponActions.UPDATE_WEAPON.toString():
      return state.map((weapon) => {
        return weapon.id === payload.id ? Object.assign({}, weapon, payload) : weapon;
      });
      default:
        return state;
    }
}
