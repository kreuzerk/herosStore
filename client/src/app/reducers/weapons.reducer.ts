import {WeaponFormComponent} from "../components/weapons/create-weapon/weapon-form/weapon-form.component";
import {Actions} from "../actions/actions";
import {Weapon} from "../model/weapon";

let createWeapon = (name: string, type: string): Weapon => ({
  id: WeaponFormComponent.counter++,
  weaponName: name,
  weaponType: type
})

let defaultWeapons = [
  createWeapon('Badmobil', 'Car'),
  createWeapon('Gas gun', 'Gun'),
  createWeapon('Iron Mans Suit', 'Suit')
]

export const weapons = (state: Array<Weapon> = defaultWeapons, {type, payload}) => {
    switch(type){
      case Actions.ADD_WEAPON.toString():
        console.log('Hiere');
        return [...state, payload];
      case Actions.DELETE_WEAPON.toString():
        return state.filter(weapon => weapon.id !== payload);
      case Actions.UPDATE_WEAPON.toString():
      return state.map((weapon) => {
        return weapon.id === payload.id ? Object.assign({}, weapon, payload) : weapon;
      });
      default:
        return state;
    }
}
