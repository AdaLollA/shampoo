import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, inject, TestBed, tick} from '@angular/core/testing';
import {RiotGamesProvider} from './riot-games';
import {RiotGamesProviderData} from './riot-games-data';
import {RiotGamesProviderEndpoints} from './riot-games-endpoints';
import {RiotGamesProviderResponse} from './riot-games-response';
import {RiotGamesProviderSamples} from './riot-games-samples';
import IChampion = RiotGamesProviderResponse.IChampion;

describe('Testing RiotGamesProvider', () => {

  const URL = 'https://euw1.api.riotgames.com/lol/';
  let riotProvider;
  let httpClientMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        RiotGamesProvider.setAPIKey('RGAPI-8d6babed-da81-4628-8853-74b38966404a'),
      ]
    });
    riotProvider = TestBed.get(RiotGamesProvider);
    httpClientMock = TestBed.get(HttpTestingController);
  }));

  it('Should be created', () => {
    expect(riotProvider).toBeTruthy();
    expect(httpClientMock).toBeTruthy();
  });

  it('Should retrieve IChampion[] with content', () => {
    riotProvider.getChampions()
      .then((champs: IChampion[]) => {
        expect(champs).toBeTruthy();
        champs.forEach(champ => {
          expect(champ).toBeTruthy();
          expect(champ.id).toBeTruthy();
          expect(champ.key).toBeTruthy();
          expect(champ.name).toBeTruthy();
          expect(champ.title).toBeTruthy();
        });
      });

    //this is the request our provider sends using the HttpClient
    const providerRequest = httpClientMock.expectOne(
      request => request.url === URL + RiotGamesProviderEndpoints.GET_CHAMPIONS
    );

    //check request
    expect(providerRequest.request.method).toBe('GET');

    //check params
    const params = providerRequest.request.params;
    expect(params.get('api_key')).toBeTruthy();

    providerRequest.flush(RiotGamesProviderSamples.GET_CHAMPION);
  });

  it('Should return latest version', () => {
    riotProvider.getLatestVersion()
      .then(version => {
        expect(version).toBe('8.5.2');
      });

    const providerRequest = httpClientMock.expectOne(
      request => request.url === URL + RiotGamesProviderEndpoints.GET_VERSIONS);

    //check request
    expect(providerRequest.request.method).toBe('GET');

    //check params
    const params = providerRequest.request.params;
    expect(params.get('api_key')).toBeTruthy();

    //flush with sample data
    providerRequest.flush(RiotGamesProviderSamples.GET_VERSIONS)
  });

  afterEach(() => {
    // verify there are no unsatisfied requests in the mockHttp queue
    httpClientMock.verify();
  });
});
