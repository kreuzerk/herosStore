import {WeaponButtons} from "./weaponbuttons/weaponbuttons";
import {Hero} from "../../model/hero.model";
import {Observable} from "rxjs/Observable";
import {HeroStore} from "../../model/hero.store";
import {Store} from "@ngrx/store";
import {HeroButtons} from "./herobuttons/button-group.component";
import {Component} from '@angular/core';

@Component({
  selector: 'arming-cmp',
  template: `
    <h3>3. Arm your hero</h3>
    <div class="col-lg-2">
      <hero-buttons></hero-buttons>
    </div>
    <div class="col-lg-2">
      <weapon-buttons></weapon-buttons>
    </div>
    <div class="col-lg-1">
      <button class="btn btn-danger forwardButton"><span class="glyphicon glyphicon-forward" aria-hidden="true"></span></button>
    </div>
    <div class="col-lg-6">
    </div>
  `,
  directives: [HeroButtons, WeaponButtons],
  styles: [`
    h3{
      color: white;
      margin-left: 20px;
    }
    .forwardButton{
      margin-left: 50px;
      margin-top: 30px;
    }
    `]
})
export class ArmingComponent{
}
