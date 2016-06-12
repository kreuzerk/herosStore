import {CreateWeaponComponent} from "./create-weapon/create-weapon.component";
import {Component} from '@angular/core';

@Component({
  selector: 'weapon-cmp',
  template: `
    <div class="col-lg-6">
      <create-weapon></create-weapon>
    </div>
    <div class="col-lg-6">
      <div class="jumbotron">
      <hero-list></hero-list>
    </div>
  </div>
  `,
  directives: [CreateWeaponComponent]
})
export class WeaponComponent{

}
