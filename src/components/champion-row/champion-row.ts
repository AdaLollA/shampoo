import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPick, IPicks} from '../../entities/Entity';
import {RiotGamesProviderResponse} from '../../providers/riot-games/riot-games-response';
import IChampion = RiotGamesProviderResponse.IChampion;
import IMastery = RiotGamesProviderResponse.IMastery;

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

  @Input('masteries')
  masteries: IMastery[];

  @Output()
  pickClick = new EventEmitter<IChampion>();

  constructor() {

  }

  private championClicked(pick: IPick) {
    this.pickClick.emit(pick.champion);
  }

  private chestAvailableforChamp(championId: number) {
    if (this.masteries && this.picks) {
      return this.masteries.find(x => x.championId == championId).chestGranted;
    }
  }

}
