import {ArmedHero} from "../model/armedHero.model";
import {Actions} from "../actions/actions";

export const armedHero = (state: Array<ArmedHero> = [], {type, payload}) => {
  switch(type){
    case Actions.ADD_ARMED_HERO.toString():
      return [...state, payload];
    default:
      return state;
  }
}
