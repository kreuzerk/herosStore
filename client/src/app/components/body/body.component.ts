import {WeaponService} from "../../services/weapon.service";
import {WeaponComponent} from "../weapons/weapon.component";
import {HeroComponent} from "../hero/hero.component";
import {HeroService} from "../../services/hero.service";
import {Component} from '@angular/core';

@Component({
  selector: 'body-cmp',
  template: `
      <div class="container-fluid">
        <div class="row">
          <hero-cmp></hero-cmp>
        </div>
        <div class="row">
          <weapon-cmp></weapon-cmp>
        </div>
      </div>
  `,
  directives: [HeroComponent, WeaponComponent],
  providers: [HeroService, WeaponService],
  styles: [`
      .row{
        margin: 20px;
      }
    `]
})
export class BodyComponent{}
