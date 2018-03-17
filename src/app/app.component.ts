import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";
import {AppConfiguration} from "./app-config";
import {IonicStorageModule, Storage} from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  homePage: any;
  settingsPage: any;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.ready().then(() => {
        this.storage.get(AppConfiguration.CONFIG_SETUP_PERFORMED).then((val) => {
          if (!val) {
            console.log('Performing first time setup...')
            for (let setting of AppConfiguration.Presets.firstTimeConfigurationData) {
              this.storage.set(setting.key, setting.value);
            }
          }

          this.homePage = HomePage;
          this.settingsPage = SettingsPage;

          this.rootPage = this.homePage;

          // Load pages after setting initial configurations
          this.pages = [
            { title: 'Home', component: this.homePage },
            { title: 'Settings', component: this.settingsPage}
          ];
        });
      })
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
