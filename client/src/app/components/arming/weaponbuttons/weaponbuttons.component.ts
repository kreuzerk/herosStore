import {Actions} from "../../../actions/actions";
import {HeroStore} from "../../../model/hero.store";
import {Weapon} from "../../../model/weapon";
import {Store} from "@ngrx/store/store";
import {Observable} from "rxjs/Observable";
import {Component, Input} from '@angular/core';


@Component({
  selector: 'weapon-buttons',
  template: `
  <div class="btn-group-vertical" role="group">
    <button #button *ngFor="let weapon of weapons | async"class="btn btn-default" (click)="buttonClicked(button, weapon)">
      <b>{{ weapon.weaponName }}</b> {{ weapon.weaponType }}
    </button>
  </div>
  `,
  styles: [`
    .btn-group-vertical{
      width: 200px;
    }
    `]
})
export class WeaponButtons{

  private previousButton: HTMLInputElement;
  weapons: Observable<Array<Weapon>>;

  constructor(private _store: Store<HeroStore>){
    this.weapons = this._store.select('weapons');
  }

  buttonClicked(button: HTMLInputElement, payload: Weapon){
    if(this.previousButton){
      this.previousButton.setAttribute('class', 'btn btn-default');
    }
    button.setAttribute('class', 'btn btn-danger');
    this.previousButton = button;

    this._store.dispatch({type: Actions.WEAPON_TO_ARM_SELECTED.toString(), payload});
  }
}
