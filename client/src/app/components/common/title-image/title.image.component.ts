import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'titleimage',
  template: `<img [src]="image"/>`,
  styles: [`
    img{
      max-width: 200px;
      max-height: 200px;
    }

    `]
})
export class TitleImage implements OnInit{

    image: string;
    @Input() isHero: boolean;

    constructor(){
      console.log(this.isHero);
    }

    ngOnInit(){
      this.image = this.isHero ? require('./darkwing.png') : require('./Weapon.png');
    }
}
