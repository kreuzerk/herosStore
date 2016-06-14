import {Hero} from "../../../../model/hero.model";
import {Observable} from "rxjs/Observable";
import {HeroStore} from "../../../../model/hero.store";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/filter';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'armedhero',
  template: `
    <b>{{ hero.heroName }}</b> {{ hero.heroSkill }}
  `
})
export class ArmedHeroComponent implements OnInit{

  @Input() heroid: number;
  @Output() onHeroDeleted = new EventEmitter<boolean>();
  hero: Hero;

  constructor(private _store: Store<HeroStore>){

  }

  ngOnInit(){
    this._store.select('heroes').subscribe(heroes => {
      this.hero = heroes.filter(hero => hero.id === this.heroid)[0];
      if(!this.hero){
        this.onHeroDeleted.emit(true);
        let fakeHero = {id: 0, heroName: '', heroSkill: ''};
        this.hero = fakeHero;
        /*
        Create a fake component before removing. Otherwise there will be an error.
        The remove of the line is handled in the parent and exectued after the
        rendering of the HMTL */
      }
    })
  }
}
