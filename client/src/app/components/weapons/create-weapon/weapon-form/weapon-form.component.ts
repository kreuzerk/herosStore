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
        <!--
        <button type="button" class="btn btn-danger" [disabled]="!heroForm.valid || !heroToUpdate"
        (click)="updateHero()">Update Hero</button>-->
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

  weaponForm: ControlGroup;
  weaponName: Control;
  weaponType: Control;

  constructor(private _fb: FormBuilder){
    this.weaponName = this._fb.control('', Validators.required);
    this.weaponType = this._fb.control('', Validators.required);
    this.weaponForm = this._fb.group({
      weaponName: this.weaponName,
      weaponType: this.weaponType
    })
  }

  addWeapon(): void {
      console.log('I am going to add a weapon');
  }
}
