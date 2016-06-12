import {Hero} from "../../../model/hero.model";
import {HeroStore} from "../../../model/hero.store";
import {Store} from "@ngrx/store";
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
          <button type="button" class="btn btn-danger" [disabled]="!heroForm.valid || !heroToUpdate"
          (click)="updateHero()">Update Hero</button>
    </form>
  `,
  providers: [FormBuilder],
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
    static counter: number = 0;
    heroToUpdate: Hero = undefined;

    constructor(private _fb: FormBuilder, private _heroService: HeroService,
      private store: Store<HeroStore>){
      this.heroName = this._fb.control('', Validators.required);
      this.heroSkill = this._fb.control('', Validators.required);
      this.heroForm = this._fb.group({
        heroName: this.heroName,
        heroSkill: this.heroSkill
      });

      this.store.select('selectedHero').subscribe((hero: Hero) => {
        if(hero){
        this.heroToUpdate = hero;
        this.heroName.updateValue(this.heroToUpdate.heroName);
        this.heroSkill.updateValue(this.heroToUpdate.heroSkill);
        }
      })

    }

    addHero(): void{
      let newHero = {
        id: HeroForm.counter++,
        heroName: this.heroName.value,
        heroSkill: this.heroSkill.value
      }
      this._heroService.addHero(newHero);
    }

    updateHero(): void{
      let updatedHero = {
        id: this.heroToUpdate.id,
        heroName: this.heroName.value,
        heroSkill: this.heroSkill.value
      };
      this._heroService.updateHero(updatedHero);
    }
}
