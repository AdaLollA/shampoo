import {Component} from '@angular/core';
import {RiotGamesProvider} from "../../providers/riot-games/riot-games";
import {AlertController, Events, reorderArray} from "ionic-angular";
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
  private summonerName: string;

  // General data
  private allChampions: IChampion[] = [];

  // Picks and bans
  private picks: IChampion[] = [];
  private bans: IChampion[] = [];

  // Cached properties todo read from properties and update on event
  private showName: boolean;
  private showTitle: boolean;

  constructor(private riotBackend: RiotGamesProvider,
              private alertCtrl: AlertController,
              private storage: Storage,
              private events: Events) {
    // Initial configuration read
    this.loadFromConfig();

    // Perform updates
    this.updateData();

    // Subscribe to configuration updates
    this.subscribeToUpdates()
  }

  /**
   * Subscribes to and handles configuration updates
   */
  private subscribeToUpdates() {
    this.events.subscribe(AppConfiguration.AppEvents.PROPERTY_CHANGED, (property) => {
      if (property == AppConfiguration.SUMMONER_NAME) {
        this.storage.get(AppConfiguration.SUMMONER_NAME).then((val) => {
          this.summonerName = val;
        })
      }
    });
  }

  /**
   * Check if updates are necessary and if so perform them.
   */
  private updateData() {
    this.riotBackend.isUpToDate().then(
      (upToDate) => {
        if (!upToDate) {
          this.riotBackend.getChampions().then(
            (res) => {
              this.allChampions = res;
              this.bans = this.allChampions.splice(0,5);
            },
            (err: BackendResponse.Error) => {
              // error
              this.basicAlert('Error', err.status.message);
            }
          );
        }
      },
      (err: BackendResponse.Error) => {
        // error
        this.basicAlert('Error', err.status.message);
      }
    );
  }

  /**
   * Load local configurations from storage.
   */
  private loadFromConfig() {
    this.storage.get(AppConfiguration.SHOW_CHAMPION_NAMES).then((val) => {
      this.showName = val;
    });
    this.storage.get(AppConfiguration.SHOW_CHAMPION_TITLES).then((val) => {
      this.showTitle = val;
    });
    this.storage.get(AppConfiguration.SUMMONER_NAME).then((val) => {
      this.summonerName = val ? val : 'Summoner';
    });
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
