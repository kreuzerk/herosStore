import {Component} from '@angular/core';

@Component({
  selector: 'armedhero-list',
  template: `
    <table class="table">
      <tr>
        <th>Hero</th>
        <th>Hero Skill</th>
        <th>Weapon</th>
        <th>Weapon Skill</th>
      </tr>
    </table>
  `
})
export class ArmedHeroList{}
