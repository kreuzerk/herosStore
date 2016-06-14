import {Actions} from "../actions/actions";
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Hero} from '../model/hero.model';
import {HeroStore} from '../model/hero.store';

@Injectable()
export class HeroService{

  constructor(private store: Store<HeroStore>){}

  addHero(payload: Hero): void{
    this.store.dispatch({type: Actions.ADD_HERO.toString(), payload});
  }

  deleteHero(payload: number){
    this.store.dispatch({type: Actions.DELETE_HERO.toString(), payload});
  }

  heroSelected(payload: Hero){
    this.store.dispatch({type: Actions.HERO_SELECTED.toString(), payload});
  }

  updateHero(payload: Hero){
    this.store.dispatch({type: Actions.UPDATE_HERO.toString(), payload});
  }
}
