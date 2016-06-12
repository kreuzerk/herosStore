import {Hero} from "../model/hero.model";

export const heroes = (state: Hero[] = [], {type, payload}) => {
  switch (type) {
    case 'ADD_HERO':
      return [...state, payload];
    case 'DELETE_HERO':
      return state.filter(hero => hero.id != payload);
    default:
      return state;
  }
};
