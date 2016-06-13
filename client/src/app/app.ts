// Polyfills
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js';

// Angular2 Dependencies
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// Style Imports
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';

//Components
import {heroes} from './reducers/hero.reducer';
import {weapons} from "./reducers/weapons.reducer";
import {selectedHero} from "./reducers/selectedhero.reducer";
import {seletedWeapon} from "./reducers/selectedWeapon.reducer";
import {AppComponent} from './app.component';
import {PLATFORM_DIRECTIVES} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {provideStore} from '@ngrx/store';


bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true}),
    provideStore({heroes, selectedHero, weapons, seletedWeapon})
]);
