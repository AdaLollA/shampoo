import {Injectable} from '@angular/core';
import {BackendProvider} from "../backend/backend";
import {RiotGamesProviderEndpoints} from "./riot-games-endpoints";
import {RiotGamesProviderResponse} from "./riot-games-response";
import IChampion = RiotGamesProviderResponse.IChampion;
import {RiotGamesProviderSamples} from "./riot-games-samples";
import {Pro} from "@ionic/pro";

/*
  Generated class for the RiotGamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiotGamesProvider {

  constructor(public backend: BackendProvider) {
  }

  public getChampions(): Promise<IChampion[]> {
    return new Promise<IChampion[]>((resolve, reject) => {
      /* TODO saving method requests
      this.backend.getData(RiotGamesProviderEndpoints.GET_CHAMPIONS).then(
        (res) => {
          let champions: IChampion[] = [];
          res = res.data;

          for (var key in res) {
            if (res.hasOwnProperty(key)) {
              champions.push(res[key]);
              //console.log(key + ": " + res[key]);
            }
          }
          resolve(champions);
        },
        (err: BackendResponse.Error) => {
          // error
          reject(err);
        }
      );
      */

      // todo delete when fetching data from backend
      let champions: IChampion[] = [];
      let res: any = RiotGamesProviderSamples.GET_CHAMPION;
      res = res.data;

      for (var key in res) {
        if (res.hasOwnProperty(key)) {
          champions.push(res[key]);
          //console.log(key + ": " + res[key]);
        }
      }
      resolve(champions);
    });
  }

  public isUpToDate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      // todo makes the app reload all data on every start
      resolve(false);
    });
  }

}
