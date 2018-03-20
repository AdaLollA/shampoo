export module RiotGamesProviderResponse {

  export interface ISummoner {
    id: number;
    accountId: number;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  }

  export interface ChampionResponse {
    data: IChampion[];
    type: string;
    version
  }

  export interface IChampion {
    name: string;
    id: number;
    title: string;
    key: string;
  }

}
