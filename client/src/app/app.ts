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
import {AppComponent} from './app.component';
import {PLATFORM_DIRECTIVES} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})
]);
