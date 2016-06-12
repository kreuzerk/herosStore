import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Hero} from '../model/hero.model';
import {HeroStore} from '../model/hero.store';

@Injectable()
export class HeroService{

  constructor(private store: Store<HeroStore>){}

  addHero(payload: Hero){
      this.store.dispatch({type: 'ADD_HERO', payload});
  }

}
