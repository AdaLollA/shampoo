export module AppConfiguration {
  // Settings
  export const CONFIG_SETUP_PERFORMED: string = 'config-setup-performed';
  export const SHOW_CHAMPION_NAMES: string = 'show-champion-names';
  export const SHOW_CHAMPION_TITLES: string = 'show-champion-titles';
  export const SUMMONER_NAME: string = 'summoner-name';

  // Data
  export const VERSION: string = 'league-of-legends-version';
  export const CHAMPIONS: string = 'stored-champions';

  export module Presets {
    export const firstTimeConfigurationData: IKeyValuePair[] = [
      {
        key: CONFIG_SETUP_PERFORMED,
        value: true
      },
      {
        key: SHOW_CHAMPION_NAMES,
        value: true
      },
      {
        key: SHOW_CHAMPION_TITLES,
        value: false
      }
    ];
  }

  export module AppEvents {
    export const PROPERTY_CHANGED: string = 'property-changed';
  }

  interface IKeyValuePair {
    key: string,
    value: any
  }
}
