import {RiotGamesProviderResponse} from "../providers/riot-games/riot-games-response";
import IChampion = RiotGamesProviderResponse.IChampion;

export interface IPick {
  champion: IChampion,
  boxAvailable: boolean,
  winRate: number
}

export interface IPicks {
  top: IPick[],
  jgl: IPick[],
  mid: IPick[],
  adc: IPick[],
  sup: IPick[]
}
