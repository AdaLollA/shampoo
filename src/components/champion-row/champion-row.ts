import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPick, IPicks} from '../../entities/Entity';
import {RiotGamesProviderResponse} from '../../providers/riot-games/riot-games-response';
import IChampion = RiotGamesProviderResponse.IChampion;

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
  pickClick = new EventEmitter<IChampion>();

  constructor() {
  }

  private championClicked(pick: IPick) {
    this.pickClick.emit(pick.champion);
  }

}
