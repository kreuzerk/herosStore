import {HeroForm} from "./hero-form/hero.form.component";
import {TitleImage} from '../../common/title-image/title.image.component';
import {Component} from '@angular/core';

@Component({
  selector: 'create-hero',
  template: `
      <div class="col-lg-5">
        <h3>1. Create a hero</h3>
        <titleimage [isHero]="isHero"></titleimage>
      </div>
      <div class="heroform col-lg-7">
        <hero-form></hero-form>
      </div>
  `,
  directives: [TitleImage, HeroForm],
  styles: [`
      .heroform{
        padding-top: 45px;
      }
      h3{
        color: white;
      }
    `]
})
export class CreateHero{
  isHero: boolean = true;
}
