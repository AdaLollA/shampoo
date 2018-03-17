import {Injectable} from '@angular/core';
import {BackendProvider} from "../backend/backend";
import {RiotGamesProviderEndpoints} from "./riot-games-endpoints";
import {RiotGamesProviderResponse} from "./riot-games-response";

/*
  Generated class for the RiotGamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RiotGamesProvider {

  constructor(public backend: BackendProvider) {
  }

  public getChampions(): Promise<any> {
    return new Promise<RiotGamesProviderResponse.IChampion[]>((resolve, reject) => {
      this.backend.getData(RiotGamesProviderEndpoints.GET_CHAMPIONS).then(
        (res) => {
          // success
          console.log(res);
        },
        (err: BackendResponse.Error) => {
          // error
          reject(err);
        }
      );
    });
  }

}
