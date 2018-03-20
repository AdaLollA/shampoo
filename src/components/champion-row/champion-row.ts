import {Component, Input} from '@angular/core';
import {IPick, IPicks} from '../../entities/Entity';

/**
 * Generated class for the ChampionRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'champion-row',
  templateUrl: 'champion-row.html'
})
export class ChampionRowComponent {

  @Input()
  picks: IPick[];

  @Input()
  version: string;

  constructor() {
    console.log('Hello ChampionRowComponent Component');
  }

}
