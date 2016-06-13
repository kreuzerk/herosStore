import {Component} from '@angular/core';

@Component({
  selector: 'hero-titleimage',
  template: `<img [src]="image"/>`,
  styles: [`
    img{
      max-width: 200px;
      max-height: 200px;
    }

    `]
})
export class HeroTitleImage{

    image: string = require('./darkwing.png');

    constructor(){}

}
