import {HeroService} from "../../../services/hero.service";
import {Component} from '@angular/core';
import {FormBuilder, Control, ControlGroup, Validators} from '@angular/common';

@Component({
  selector: 'hero-form',
  template: `
    <form [ngFormModel]="heroForm" (submit)="addHero()">
          <div class="form-group">
              <label>Heros Name</label>
              <input type="text" class="form-control" ngControl="heroName"/>
              <div class="errormessage" *ngIf="heroName.dirty && heroName.hasError('required')">
                  Please select a heros name
              </div>
          </div>
          <div class="form-group">
                <label>Heros Skill</label>
                <input type="text" class="form-control" ngControl="heroSkill"/>
                <div class="errormessage" *ngIf="heroSkill.dirty && heroSkill.hasError('required')">
                    Please select a skill for your hero
                </div>
          </div>
          <button type="submit" class="btn btn-danger" [disabled]="!heroForm.valid">Add Hero</button>
    </form>
  `,
  providers: [FormBuilder, HeroService],
  styles: [`
      .errormessage{
        color: red;
      }
      label{
        color: white;
      }
    `]
})
export class HeroForm{

    heroForm: ControlGroup;
    heroName: Control;
    heroSkill: Control;

    constructor(private _fb: FormBuilder, private _heroService: HeroService){
      this.heroName = this._fb.control('', Validators.required);
      this.heroSkill = this._fb.control('', Validators.required);
      this.heroForm = this._fb.group({
        heroName: this.heroName,
        heroSkill: this.heroSkill
      });
    }

    addHero(): void{
      let newHero = {
        heroName: this.heroName.value,
        heroSkill: this.heroSkill.value
      }
      this._heroService.addHero(newHero);
    }
}
