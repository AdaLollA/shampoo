import {Component} from '@angular/core';
import {RiotGamesProvider} from "../../providers/riot-games/riot-games";
import {AlertController, reorderArray} from "ionic-angular";
import {RiotGamesProviderResponse} from "../../providers/riot-games/riot-games-response";
import IChampion = RiotGamesProviderResponse.IChampion;
import {Storage} from "@ionic/storage";
import {AppConfiguration} from "../../app/app-config";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Temporary summoner name definition:
  private summonerName: string = 'AdaLollA';

  private picks: IChampion[] = [];
  private bans: IChampion[] = [];

  // Cached properties todo read from properties and update on event
  private showName: boolean;
  private showTitle: boolean;

  constructor(private riotBackend: RiotGamesProvider, private alertCtrl: AlertController, private storage: Storage) {
    // Initial configuration read
    storage.get(AppConfiguration.SHOW_CHAMPION_NAMES).then((val) => {
      this.showName = val;
    });
    storage.get(AppConfiguration.SHOW_CHAMPION_TITLES).then((val) => {
      this.showTitle = val;
    });

    // todo temporary fetch all champions for sample data
    riotBackend.getChampions().then(
      (res) => {
        this.picks = res;
      },
      (err: BackendResponse.Error) => {
        // error
        this.basicAlert('Error', err.status.message);
      }
    );
    riotBackend.getChampions().then(
      (res) => {
        this.bans = res.splice(0,5);
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
   * Called when a pick is reordered.
   *
   * @param indexes ReorderIndexes (from, to)
   */
  private reorderPicks(indexes) {
    this.bans = reorderArray(this.bans, indexes);
  }

  /**
   * Creates and presents a dialog that provides details about a specific champion
   *
   * @param {RiotGamesProviderResponse.IChampion} champ The champion that is going to be described in detail.
   */
  private showChampionDetails(champ: IChampion) {
    let alert = this.alertCtrl.create({
      title: champ.name,
      subTitle: champ.title,
      buttons: ['OK']
    });
    alert.present();
  }

}
