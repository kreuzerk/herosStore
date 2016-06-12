import {HeroForm} from "../components/create-hero/hero-form/hero.form.component";
import {Hero} from "../model/hero.model";

let createHero = (name: string, skill: string) => ({
  id: HeroForm.counter++,
  heroName: name,
  heroSkill: skill
})

const allTimeHeroes = [
  createHero('Batman', 'Driving'),
  createHero('SpiderMan', 'Jumping'),
  createHero('Flash', 'Running')
]

export const heroes = (state: Hero[] = allTimeHeroes, {type, payload}) => {
  switch (type) {
    case 'ADD_HERO':
      return [...state, payload];
    case 'DELETE_HERO':
      return state.filter(hero => hero.id != payload);
    default:
      return state;
  }
};
