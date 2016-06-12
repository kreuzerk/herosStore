import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Hero} from '../model/hero.model';
import {HeroStore} from '../model/hero.store';

@Injectable()
export class HeroService{

  constructor(private store: Store<HeroStore>){}

  addHero(payload: Hero): void{
    this.store.dispatch({type: 'ADD_HERO', payload});
  }

  deleteHero(payload: number){
    this.store.dispatch({type: 'DELETE_HERO', payload});
  }

  heroSelected(payload: Hero){
    this.store.dispatch({type: 'HERO_SELECTED', payload});
  }
}
