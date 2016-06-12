import {TitleImage} from "../../common/title-image/title.image.component";
import {WeaponFormComponent} from "./weapon-form/weapon-form.component";
import {Component} from '@angular/core';

@Component({
  selector: 'create-weapon',
  template: `
    <div class="col-lg-5">
      <h3>2. Create weapons</h3>
      <titleimage></titleimage>
    </div>
    <div class="weaponform col-lg-7">
      <weapon-form></weapon-form>
    </div>
  `,
  directives: [WeaponFormComponent, TitleImage],
  styles: [`
    h3{
      color: white;
    }
    .weaponform{
      padding-top: 45px;
    }
    `]
})
export class CreateWeaponComponent{}
