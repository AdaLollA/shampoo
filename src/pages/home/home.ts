import {Component} from '@angular/core';
import {RiotGamesProvider} from '../../providers/riot-games/riot-games';
import {AlertController, Events, NavController, reorderArray} from 'ionic-angular';
import {RiotGamesProviderResponse} from '../../providers/riot-games/riot-games-response';
import IChampion = RiotGamesProviderResponse.IChampion;
import {Storage} from '@ionic/storage';
import {AppConfiguration} from '../../app/app-config';
import {IPick, IPicks} from '../../entities/Entity';
import {version} from 'punycode';
import {DragulaService} from 'ng2-dragula';

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
  private picks: IPicks;
  private bans: IChampion[] = [];

  // Cached properties
  private showName: boolean;
  private showTitle: boolean;
  private version: string;

  // Dragula data
  private banBag: string = 'ban-bag';

  constructor(private riotBackend: RiotGamesProvider,
              private alertCtrl: AlertController,
              private storage: Storage,
              private events: Events,
              private dragula: DragulaService) {
    this.picks = {
      top: [],
      jgl: [],
      mid: [],
      adc: [],
      sup: []
    };

    // Initial configuration read
    this.loadFromConfig();

    // Perform updates
    this.updateData();

    // Subscribe to configuration updates
    this.subscribeToUpdates();

    // Init drag and drop
    this.initDragula();
  }

  /**
   * Defines the darg and drop hooks and handlers
   */
  private initDragula() {
    this.dragula.setOptions(this.banBag, {
      moves: function (el, container, handle) {
        return handle.className === 'handle icon icon-md ion-md-move';
      }
    });
    this.dragula.drop.subscribe((val) => {
      console.log(val);
      // todo
    })
  }

  /**
   * Called when the element is destroyed. Clears the dragula bags
   * so that they can be reattached when the view is rebuilt.
   */
  public ngOnDestroy() {
    if (this.dragula.find('ban-bag') !== undefined) {
      this.dragula.destroy('ban-bag');
    }
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
    this.riotBackend.getLatestVersion().then(
      (latestVersion) => {
        this.storage.get(AppConfiguration.VERSION).then((currentVersion) => {
          if (currentVersion != latestVersion) {
            // Perform update
            console.log('New version available: ' + latestVersion + ' - Updating...');
            this.riotBackend.getChampions().then(
              (res) => {
                this.allChampions = res;
                console.log('storing champions,', this.allChampions);
                console.log('champion storage tag', AppConfiguration.CHAMPIONS);
                this.storage.set(AppConfiguration.CHAMPIONS, this.allChampions).then(() => {
                  this.loadFromConfig();
                });
              },
              (err: BackendResponse.Error) => {
                // error
                this.basicAlert('Error', err.status.message);
              }
            );

            // store version number that is updated to
            this.storage.set(AppConfiguration.VERSION, latestVersion);
          }
        })
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
    this.storage.get(AppConfiguration.VERSION).then((val) => {
      this.version = val;
    });
    this.storage.get(AppConfiguration.SHOW_CHAMPION_NAMES).then((val) => {
      this.showName = val;
    });
    this.storage.get(AppConfiguration.SHOW_CHAMPION_TITLES).then((val) => {
      this.showTitle = val;
    });
    this.storage.get(AppConfiguration.SUMMONER_NAME).then((val) => {
      this.summonerName = val ? val : 'Summoner';
    });
    this.storage.get(AppConfiguration.CHAMPIONS).then((val) => {
      this.allChampions = val;
      // todo manage bans independently of all champions
      if (val) {
        this.bans = this.allChampions.splice(0, 5);

        let winrate: number = 70;
        for (let champ of this.bans) {
          this.picks.top.push({
            champion: champ,
            winRate: winrate,
            boxAvailable: true
          });

          this.picks.jgl.push({
            champion: champ,
            winRate: winrate,
            boxAvailable: true
          });

          this.picks.mid.push({
            champion: champ,
            winRate: winrate,
            boxAvailable: true
          });

          this.picks.adc.push({
            champion: champ,
            winRate: winrate,
            boxAvailable: true
          });

          this.picks.sup.push({
            champion: champ,
            winRate: winrate,
            boxAvailable: true
          });

          winrate -= 10;
        }
      }
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
   * Creates and presents a dialog that provides details about a specific champion
   *
   * @param {RiotGamesProviderResponse.IChampion} champ The champion that is going to be described in detail.
   */
  private showChampionDetails(pick: IChampion) {
    let alert = this.alertCtrl.create({
      title: pick.name,
      subTitle: pick.title,
      buttons: ['OK']
    });
    alert.present();
  }

}
