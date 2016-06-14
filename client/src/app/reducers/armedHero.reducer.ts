import {ArmingComponent} from "../components/arming/arming.component";
import {ArmedHero} from "../model/armedHero.model";
import {Actions} from "../actions/actions";

let createArmedHero = (heroId: number, weaponId: number) => ({
  id: ArmingComponent.counter++,
  heroId: heroId,
  weaponId: weaponId
})

let armedHeros = [
  createArmedHero(0,0),
  createArmedHero(1,1)
]

export const armedHero = (state: Array<ArmedHero> = armedHeros, {type, payload}) => {
  switch(type){
    case Actions.ADD_ARMED_HERO.toString():
      return [...state, payload];
    case Actions.DELETE_ARMED_HERO.toString():
      return state.filter(armedHero => armedHero.id !== payload);
    default:
      return state;
  }
}
