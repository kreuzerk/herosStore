import {Actions} from "../actions/actions";
import {Hero} from "../model/hero.model";

export const selectedHero = (state: Hero = null, {type, payload}) => {
  switch(type){
    case Actions.HERO_SELECTED.toString():
      return payload;
    default:
      return state;
  }
}
