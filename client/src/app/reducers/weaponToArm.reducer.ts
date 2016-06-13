import {Weapon} from "../model/weapon";
import {Actions} from "../actions/actions";

export const weaponToArm = (state: Weapon = null, {type, payload}) => {
  switch(type){
    case Actions.WEAPON_TO_ARM_SELECTED.toString():
      return payload;
    default:
      return state;
  }
}
