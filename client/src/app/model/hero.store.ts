import {Weapon} from "./weapon";
import {Hero} from "./hero.model";

export interface HeroStore{
  heroes: Hero[],
  selectedHero: Hero,
  weapons: Weapon[],
  seletedWeapon: Weapon,
  heroToArm: Hero,
  weaponToArm: Weapon
}
