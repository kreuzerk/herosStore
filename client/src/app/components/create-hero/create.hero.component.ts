import {HeroForm} from "./hero-form/hero.form.component";
import {Component} from '@angular/core';
import {HeroTitleImage} from './title-image/title.image.component';

@Component({
  selector: 'create-hero',
  template: `
      <div class="col-lg-5">
        <h3>Create a hero</h3>
        <hero-titleimage></hero-titleimage>
      </div>
      <div class="heroform col-lg-7">
        <hero-form></hero-form>
      </div>
  `,
  directives: [HeroTitleImage, HeroForm],
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
}
