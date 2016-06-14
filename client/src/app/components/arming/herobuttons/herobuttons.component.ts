import {Actions} from "../../../actions/actions";
import {HeroStore} from "../../../model/hero.store";
import {Hero} from "../../../model/hero.model";
import {Store} from "@ngrx/store/store";
import {Observable} from "rxjs/Observable";
import {Component, Input} from '@angular/core';


@Component({
  selector: 'hero-buttons',
  template: `
  <div class="btn-group-vertical" role="group">
    <button #button *ngFor="let hero of heroes | async"class="btn btn-default" (click)="buttonClicked(button, hero)">
      <b>{{ hero.heroName }}</b> {{ hero.heroSkill }}
    </button>
  </div>
  `,
  styles: [`
    .btn-group-vertical{
      width: 200px;
    }
    `]
})
export class HeroButtons{

  private previousButton: HTMLInputElement;
  heroes: Observable<Array<Hero>>;

  constructor(private _store: Store<HeroStore>){
    this.heroes = this._store.select('heroes');
  }

  buttonClicked(button: HTMLInputElement, payload: Hero){
    if(this.previousButton){
      this.previousButton.setAttribute('class', 'btn btn-default');
    }
    button.setAttribute('class', 'btn btn-danger');
    this.previousButton = button;

    this._store.dispatch({type: Actions.HERO_TO_ARM_SELECTED.toString(), payload})
  }
}
