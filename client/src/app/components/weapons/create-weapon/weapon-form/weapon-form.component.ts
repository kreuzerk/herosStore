import {Weapon} from "../../../../model/weapon";
import {HeroStore} from "../../../../model/hero.store";
import {Store} from "@ngrx/store";
import {WeaponService} from "../../../../services/weapon.service";
import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';

@Component({
  selector: 'weapon-form',
  template: `
  <form [ngFormModel]="weaponForm" (submit)="addWeapon()">
        <div class="form-group">
            <label>Weaponname</label>
            <input type="text" class="form-control" ngControl="weaponName"/>
            <div class="errormessage" *ngIf="weaponName.dirty && weaponName.hasError('required')">
                Please select a weapons name
            </div>
        </div>
        <div class="form-group">
              <label>Weapontype</label>
              <input type="text" class="form-control" ngControl="weaponType"/>
              <div class="errormessage" *ngIf="weaponType.dirty && weaponType.hasError('required')">
                  Please select a weapons type
              </div>
        </div>
        <button type="submit" class="btn btn-danger" [disabled]="!weaponForm.valid">Add a Weapon</button>
        <button type="button" class="btn btn-danger" [disabled]="!weaponForm.valid || !weaponToUpdate"
        (click)="updateWeapon()">Update Weapon</button>
  </form>
  `,
  styles: [`
    label{
      color: white;
    }
    .errormessage{
      color: red;
    }
    `]
})
export class WeaponFormComponent{

  static counter: number = 0;
  weaponForm: ControlGroup;
  weaponName: Control;
  weaponType: Control;
  private weaponToUpdate: Weapon;

  constructor(private _fb: FormBuilder, private _weaponService: WeaponService,
    private _store: Store<HeroStore>){
    this.weaponName = this._fb.control('', Validators.required);
    this.weaponType = this._fb.control('', Validators.required);
    this.weaponForm = this._fb.group({
      weaponName: this.weaponName,
      weaponType: this.weaponType
    })

    this._store.select('seletedWeapon').subscribe((selectedWeapon: Weapon) => {
      if(selectedWeapon){
      this.weaponToUpdate = selectedWeapon;
      this.weaponName.updateValue(this.weaponToUpdate.weaponName);
      this.weaponType.updateValue(this.weaponToUpdate.weaponType);
      }
    })
  }

  addWeapon(): void {
      let newWeapon = {
        id: WeaponFormComponent.counter++,
        weaponName: this.weaponName.value,
        weaponType: this.weaponType.value
      }

      this._weaponService.addWeapon(newWeapon);
      this._resetForm();
  }

  private _resetForm(){
    this.weaponName.updateValue('');
    this.weaponName.setErrors(null);
    this.weaponType.updateValue('');
    this.weaponType.setErrors(null);
  }

  updateWeapon(): void{
    let updatedWeapon = {
      id: this.weaponToUpdate.id,
      weaponName: this.weaponName.value,
      weaponType: this.weaponType.value
    };
    this._weaponService.updateWeapon(updatedWeapon);
  }
}
