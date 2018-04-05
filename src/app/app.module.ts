import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {ApiBaseProvider} from '../components/backend/base-provider';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SettingsPage} from '../pages/settings/settings';
import {RiotGamesProvider, RiotGamesProviderMock} from '../providers/riot-games/riot-games';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {ChampionRowComponent} from '../components/champion-row/champion-row';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    ChampionRowComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: RiotGamesProvider.setAPIKey('RGAPI-6c1d02d6-748f-4837-be66-b8cfa7b31ccc'),
      useClass: RiotGamesProviderMock
    },
    IonicStorageModule
  ]
})

export class AppModule {
}
