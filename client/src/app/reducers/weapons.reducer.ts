import {WeaponActions} from "../actions/weapon.actions";
import {Weapon} from "../model/weapon";

export const weapons = (state: Array<Weapon> = [], {type, payload}) => {
    console.log('Inside the redurcer');
    switch(type){
      case WeaponActions.ADD_WEAPON.toString():
        return [...state, payload];
      default:
        return state;
    }
}
