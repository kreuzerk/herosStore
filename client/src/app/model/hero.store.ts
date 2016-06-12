import {Hero} from "./hero.model";

export interface HeroStore{
  heroes: Hero[],
  selectedHero: Hero
}
