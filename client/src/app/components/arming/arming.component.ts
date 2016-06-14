import {Actions} from "../../actions/actions";
import {ArmedHero} from "../../model/armedHero.model";
import {ArmedHeroList} from "./armedhero/armedhero.list.component";
import {Weapon} from "../../model/weapon";
import {WeaponButtons} from "./weaponbuttons/weaponbuttons.component";
import {Hero} from "../../model/hero.model";
import {Observable} from "rxjs/Observable";
import {HeroStore} from "../../model/hero.store";
import {Store} from "@ngrx/store";
import {HeroButtons} from "./herobuttons/herobuttons.component";
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
    <div class="col-lg-2">
      <button class="btn btn-danger forwardButton" (click)="addArmedHero()"><span class="glyphicon glyphicon-forward" aria-hidden="true"></span></button>
    </div>
    <div class="col-lg-6">
      <div class="jumbotron">
        <armedhero-list></armedhero-list>
      </div>
    </div>
  `,
  directives: [HeroButtons, WeaponButtons, ArmedHeroList],
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

  private hero: Hero;
  private weapon: Weapon;
  private static counter: number = 0;

  constructor(private _store: Store<HeroStore>){
    this._store.select('heroToArm').subscribe((hero: Hero) => {
      this.hero = hero;
    })

    this._store.select('weaponToArm').subscribe((weapon: Weapon) => {
      this.weapon = weapon;
    })
  }

  addArmedHero(): void{
    let payload = {
      id: ArmingComponent.counter++,
      heroId: this.hero.id,
      weaponId: this.weapon.id
    }
    this._store.dispatch({type: Actions.ADD_ARMED_HERO.toString(), payload})
  }
}
