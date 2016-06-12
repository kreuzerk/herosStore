import {Hero} from "../model/hero.model";

export const selectedHero = (state: Hero = null, {type, payload}) => {
  switch(type){
    case 'HERO_SELECTED':
      return payload;
    default:
      return state;
  }
}
