import {Component, Input, Output} from '@angular/core';
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

  @Input('champions')
  picks: IPick[];

  @Input('version')
  version: string;

  @Input('show-name')
  showName: boolean;

  // todo click function output
  @Output()
  pickClick

  constructor() {
  }

}
