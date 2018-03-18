import {Component} from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppConfiguration} from "../../app/app-config";
import {Storage} from "@ionic/storage";
import {loadDiagnostic} from "@ionic/app-scripts/dist/logger/logger-tslint";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private showName: boolean;
  private showTitle: boolean;
  private summonerName: string;
  private summonerNameOld: string;

  constructor(private storage: Storage,
              private alertCtrl: AlertController,
              private events: Events) {
    this.loadSettings();
  }

  private loadSettings() {
    this.storage.get(AppConfiguration.SHOW_CHAMPION_NAMES).then((val) => {
      this.showName = val;
    });

    this.storage.get(AppConfiguration.SHOW_CHAMPION_TITLES).then((val) => {
      this.showTitle = val;
    });

    this.storage.get(AppConfiguration.SUMMONER_NAME).then((val) => {
      this.summonerName = val;
      this.summonerNameOld = val;
    })
  }

  /**
   * Clears local storage and informs the user as soon as the process
   * is finished.
   */
  private clearStorage() {
    this.storage.clear().then(() => {
      console.log('Performing first time setup...')
      for (let setting of AppConfiguration.Presets.firstTimeConfigurationData) {
        this.storage.set(setting.key, setting.value);
      }
      this.showPrompt();
    });
  }

  private showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Cache Cleared',
      message: "You may re-enter your summoner name.",
      inputs: [
        {
          name: 'summonername',
          placeholder: 'Summoner Name'
        },
      ],
      buttons: [
        {
          text: 'Skip',
          handler: () => {
            this.loadSettings();
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Stored Summoner: ', data.summonername);
            this.storage.set(AppConfiguration.SUMMONER_NAME, data.summonername).then(() => {
              this.events.publish(AppConfiguration.AppEvents.PROPERTY_CHANGED, AppConfiguration.SUMMONER_NAME);
              this.loadSettings();
            });
          }
        }
      ]
    });
    prompt.present();
  }

  // Property setter
  private setShowName(val: any) {
    if (val != this.showName) {
      this.storage.set(AppConfiguration.SHOW_CHAMPION_NAMES, val.checked);
    }
  }

  private setShowTitle(val: any) {
    if (val != this.showTitle) {
      this.storage.set(AppConfiguration.SHOW_CHAMPION_TITLES, val.checked);
    }
  }

  saveSummonerName() {
    this.storage.set(AppConfiguration.SUMMONER_NAME, this.summonerName).then(() => {
      this.loadSettings();
    });
  }

}
