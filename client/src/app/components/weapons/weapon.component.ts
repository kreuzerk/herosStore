import {CreateWeaponComponent} from "./create-weapon/create-weapon.component";
import {WeaponsList} from './weapons-list/weapon-list.component';
import {Component} from '@angular/core';

@Component({
  selector: 'weapon-cmp',
  template: `
    <div class="col-lg-6">
      <create-weapon></create-weapon>
    </div>
    <div class="col-lg-6">
      <div class="jumbotron">
      <weapons-list></weapons-list>
    </div>
  </div>
  `,
  directives: [CreateWeaponComponent, WeaponsList]
})
export class WeaponComponent{

}
