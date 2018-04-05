import {Injectable} from '@angular/core';
import {ApiBaseProvider} from '../../components/backend/base-provider';
import {APIRequestBuilder, HTTP_METHOD} from '../../components/backend/request';
import {RiotGamesProviderResponse} from './riot-games-response';
import IChampion = RiotGamesProviderResponse.IChampion;
import {RiotGamesProviderSamples} from './riot-games-samples';
import {HttpClient} from '@angular/common/http';
import {RiotGamesProviderEndpoints} from './riot-games-endpoints';
import ChampionResponse = RiotGamesProviderResponse.ChampionResponse;
import IMastery = RiotGamesProviderResponse.IMastery;

/**
 * Base interface for the capabilities of the RIOT-Games API used in this application
 */
interface IRiotGamesEndpoints {
  getChampions(): Promise<IChampion[]>;

  getLatestVersion(): Promise<string>;

  getChampionMastery(summonerId: string): Promise<IMastery[]>;
}

@Injectable()
export class RiotGamesProvider extends ApiBaseProvider implements IRiotGamesEndpoints {
  private static apiKey: string

  constructor(private httpClient: HttpClient) {
    super(httpClient,
      'https://euw1.api.riotgames.com/lol/',
      RiotGamesProvider.apiKey)
  }

  /**
   * Set the riot API-Key where the provider is set
   * @param {string} apiKey the
   * @returns {typeof RiotGamesProvider}
   */
  public static setAPIKey(apiKey: string): typeof RiotGamesProvider {
    this.apiKey = apiKey;
    return this;
  }

  public getChampionMastery(summonerId: string): Promise<RiotGamesProviderResponse.IMastery[]> {
    // todo builder?
    let request = new APIRequestBuilder(RiotGamesProviderEndpoints.GET_MASTERY, HTTP_METHOD.GET)
      .addToPath(summonerId)
      .build();

    return new Promise<IMastery[]>((resolve, reject) => {
      this.request<IMastery[]>(request).then(
        (masteryResponse) => {
          //let masteries = ;
          resolve(masteryResponse);
        },
        (err: BackendResponse.Error) => {
          // error
          reject(err);
        }
      );
    });
  }

  public getChampions(): Promise<IChampion[]> {
    let request = new APIRequestBuilder(RiotGamesProviderEndpoints.GET_CHAMPIONS, HTTP_METHOD.GET)
      .build();

    return new Promise<IChampion[]>((resolve, reject) => {
      this.request<ChampionResponse>(request).then(
        (championResponse) => {
          let data = championResponse.data;
          let champions: IChampion[] = [];
          for (let key in data) {
            if (data.hasOwnProperty(key)) {
              champions.push(data[key]);
            }
          }
          resolve(champions);
        },
        (err: BackendResponse.Error) => {
          // error
          reject(err);
        }
      );
    });
  }

  /**
   * Retrieved the current version of League of Legends from the RIOT-API
   * @returns {Promise<string>} the latest version as string
   */
  public getLatestVersion(): Promise<string> {
    let request = new APIRequestBuilder(RiotGamesProviderEndpoints.GET_VERSIONS, HTTP_METHOD.GET)
      .build();

    return new Promise<string>((resolve, reject) => {
      this.request<string[]>(request).then(
        (versions) => {
          resolve(versions[0]);
        },
        (err: BackendResponse.Error) => {
          reject(err);
        });
    });
  }
}

/**
 * A mocked version of the RiotGamesProvider
 */
export class RiotGamesProviderMock implements IRiotGamesEndpoints {

  public getChampionMastery(summonerId: string): Promise<RiotGamesProviderResponse.IMastery[]> {
    console.warn('You are currently using a mocked getChampionMastery() call!');
    return new Promise<IMastery[]>((resolve, reject) => {
      let masteries: IMastery[];
      masteries = RiotGamesProviderSamples.GET_MASTERY;
      resolve(masteries);
    });
  }

  public getChampions(): Promise<IChampion[]> {
    console.warn('You are currently using a mocked getChampions() call!');
    return new Promise<IChampion[]>((resolve, reject) => {
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

  public getLatestVersion(): Promise<string> {
    console.warn('You are currently using a mocked getLatestVersion() call!');
    return new Promise<string>((resolve, reject) => {
      let res: any = RiotGamesProviderSamples.GET_VERSIONS;
      let versions: string[] = [];
      for (var key in res) {
        if (res.hasOwnProperty(key)) {
          versions.push(res[key]);
        }
      }
      resolve(versions[0]);
    });
  }
}
