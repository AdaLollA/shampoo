import {Component} from '@angular/core';
import {RiotGamesProvider} from "../../providers/riot-games/riot-games";
import {AlertController} from "ionic-angular";
import {RiotGamesProviderResponse} from "../../providers/riot-games/riot-games-response";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Temporary summoner name definition:
  private summonerName: string = 'AdaLollA';

  private picks: RiotGamesProviderResponse.IChampion[] = [];

  constructor(private riotBackend: RiotGamesProvider, private alertCtrl: AlertController) {
    riotBackend.getChampions().then(
      (res) => {
        this.picks = res;
      },
      (err: BackendResponse.Error) => {
        // error
        this.basicAlert('Error', err.status.message);
      }
    );
  }

  /**
   * A basic dialog wrapper that will always show the option "Okay" but the text
   * can be modified.
   *
   * @param {string} title Title of the alert.
   * @param {string} message Message (content) of the alert.
   */
  basicAlert(title: string, message: string) {
    let debugAlert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [{
        text: 'Okay',
        role: 'cancel'
      }]
    });
    debugAlert.present();
  }

  /**
   * This function is called when a pick is selected.
   *
   * @param {string} pick The selected pick.
   */
  private pickSelected(pick: string) {

  }

}
