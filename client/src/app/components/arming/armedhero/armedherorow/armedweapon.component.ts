import {Weapon} from "../../../../model/weapon";
import {Observable} from "rxjs/Observable";
import {HeroStore} from "../../../../model/hero.store";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/filter';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'armedweapon',
  template: `
    <b>{{ weapon.weaponName }}</b> {{ weapon.weaponType }}
  `
})
export class ArmedWeaponComponent implements OnInit{

  @Input() weaponId: number;
  @Output() onWeaponDeleted = new EventEmitter<boolean>();
  weapon: Weapon;

  constructor(private _store: Store<HeroStore>){}

  ngOnInit(){
    this._store.select('weapons').subscribe(weapons => {
      this.weapon = weapons.filter(weapon => weapon.id === this.weaponId)[0];
      if(!this.weapon){
        this.onWeaponDeleted.emit(true);
        let fakeWeapon = {id: 0, weaponName: '', weaponType: ''};
        this.weapon = fakeWeapon;
        /*
        Create a fake component before removing. Otherwise there will be an error.
        The remove of the line is handled in the parent and exectued after the
        rendering of the HMTL */
      }
    })
  }
}
