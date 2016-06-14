import {Hero} from "../model/hero.model";
import {Actions} from "../actions/actions";


export const heroToArm = (state: Hero = null, {type, payload}) => {
  switch(type){
    case Actions.HERO_TO_ARM_SELECTED.toString():
      return payload;
    default:
      return state;
  }
}
