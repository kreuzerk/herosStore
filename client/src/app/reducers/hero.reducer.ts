import {Hero} from "../model/hero.model";

export const heroes = (state: Hero[] = [], {type, payload}) => {
  switch (type) {
    case 'ADD_HERO':
      return [...state, payload];
    default:
      return state;
  }
};
