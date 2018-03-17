export module AppConfiguration {
  export const CONFIG_SETUP_PERFORMED: string = 'config-setup-performed';
  export const SHOW_CHAMPION_NAMES: string = 'show-champion-names';
  export const SHOW_CHAMPION_TITLES: string = 'show-champion-titles';

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
        value: true
      }
    ];
  }

  interface IKeyValuePair {
    key: string,
    value: any
  }
}
