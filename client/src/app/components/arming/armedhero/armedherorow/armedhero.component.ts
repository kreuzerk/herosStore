import {Hero} from "../../../../model/hero.model";
import {Observable} from "rxjs/Observable";
import {HeroStore} from "../../../../model/hero.store";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/filter';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'armedhero',
  template: `
    <b>{{ hero.heroName }}</b> {{ hero.heroSkill }}
  `
})
export class ArmedHeroComponent implements OnInit{

  @Input() heroid: number;
  hero: Hero;

  constructor(private _store: Store<HeroStore>){

  }

  ngOnInit(){
    this._store.select('heroes').subscribe(heroes => {
      this.hero = heroes.filter(hero => hero.id === this.heroid)[0];
    })
  }
}
