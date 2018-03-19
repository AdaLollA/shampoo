import {Injectable} from '@angular/core';
import {ApiBaseProvider} from '../../components/backend/base-provider';
import {APIRequestBuilder, HTTP_METHOD} from '../../components/backend/request';
import {RiotGamesProviderResponse} from './riot-games-response';
import IChampion = RiotGamesProviderResponse.IChampion;
import {RiotGamesProviderSamples} from './riot-games-samples';
import {HttpClient} from '@angular/common/http';
import {RiotGamesProviderEndpoints} from './riot-games-endpoints';
import ChampionResponse = RiotGamesProviderResponse.ChampionResponse;

@Injectable()
export class RiotGamesProvider extends ApiBaseProvider {

  private static apiKey: string

  private mockData: boolean = false;

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

  public getChampions(): Promise<IChampion[]> {
    let request = new APIRequestBuilder(RiotGamesProviderEndpoints.GET_CHAMPIONS, HTTP_METHOD.GET)
      .build();

    return new Promise<IChampion[]>((resolve, reject) => {
      if (!this.mockData) {
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

  /**
   * Retrieved the current version of League of Legends from the RIOT-API
   * @returns {Promise<string>} the latest version as string
   */
  public getLatestVersion(): Promise<string> {
    let request = new APIRequestBuilder(RiotGamesProviderEndpoints.GET_VERSIONS, HTTP_METHOD.GET)
      .build();

    return new Promise<string>((resolve, reject) => {
      if (!this.mockData) {
        this.request<string[]>(request).then(
          (versions) => {
            resolve(versions[0]);
          },
          (err: BackendResponse.Error) => {
            reject(err);
          });
      } else {
        let res: any = RiotGamesProviderSamples.GET_VERSIONS;
        let versions: string[] = [];
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
