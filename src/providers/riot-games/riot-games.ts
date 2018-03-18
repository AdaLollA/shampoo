import {Injectable} from '@angular/core';
import {BackendProvider} from "../backend/backend";
import {RiotGamesProviderEndpoints} from "./riot-games-endpoints";
import {RiotGamesProviderResponse} from "./riot-games-response";
import IChampion = RiotGamesProviderResponse.IChampion;
import {RiotGamesProviderSamples} from "./riot-games-samples";
import {Pro} from "@ionic/pro";
import {Storage} from "@ionic/storage";
import {AppConfiguration} from "../../app/app-config";

/*
  Generated class for the RiotGamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiotGamesProvider {

  // Switches between mocked and live data
  private mockData: boolean = true;

  constructor(private backend: BackendProvider) {
  }

  public getChampions(): Promise<IChampion[]> {
    return new Promise<IChampion[]>((resolve, reject) => {
      if (!this.mockData) {
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
      } else {
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
      }
    });
  }

  public getLatestVersion(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let versions: string[] = [];
      if (!this.mockData) {
        this.backend.getData(RiotGamesProviderEndpoints.GET_VERSIONS).then(
          (res) => {
            for (var key in res) {
              if (res.hasOwnProperty(key)) {
                versions.push(res[key]);
              }
            }
            resolve(versions[0]);
          },
          (err: BackendResponse.Error) => {
            reject(err);
          });
      } else {
        let res: any = RiotGamesProviderSamples.GET_VERSIONS;
        for (var key in res) {
          if (res.hasOwnProperty(key)) {
            versions.push(res[key]);
          }
        }
        resolve(versions[0]);
      }

    });
  }

}
