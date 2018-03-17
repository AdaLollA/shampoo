import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppConfiguration} from "../../app/app-config";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  private showName: boolean;
  private showTitle: boolean;

  constructor(private storage: Storage, private alertCtrl: AlertController) {
    this.loadSettings()
  }

  private loadSettings() {
    this.storage.get(AppConfiguration.SHOW_CHAMPION_NAMES).then((val) => {
      this.showName = val;
    });

    this.storage.get(AppConfiguration.SHOW_CHAMPION_TITLES).then((val) => {
      this.showTitle = val;
    });
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

      let debugAlert = this.alertCtrl.create({
        title: 'Storage Cleared',
        message: 'Factory defaults are going to be restored now.',
        buttons: [{
          text: 'Okay',
          role: 'cancel',
          handler: () => {
            this.loadSettings();
          }
        }]
      });
      debugAlert.present();

    });
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

}
