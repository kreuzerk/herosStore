import {HeroForm} from "../components/hero/create-hero/hero-form/hero.form.component";
import {Hero} from "../model/hero.model";

let createHero = (name: string, skill: string) => ({
  id: HeroForm.counter++,
  heroName: name,
  heroSkill: skill
})

const allTimeHeroes = [
  createHero('Batman', 'Driving'),
  createHero('Darkwing Duck', 'Appear from nowhere'),
  createHero('Flash', 'Running')
]

export const heroes = (state: Hero[] = allTimeHeroes, {type, payload}) => {
  switch (type) {
    case 'ADD_HERO':
      return [...state, payload];
    case 'DELETE_HERO':
      return state.filter(hero => hero.id != payload);
    case 'UPDATE_HERO':
      return state.map((hero) => {
        return hero.id === payload.id ? Object.assign({}, hero, payload) : hero;
      });
    default:
      return state;
  }
};
