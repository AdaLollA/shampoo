import {AppConfiguration} from '../../src/app/app-config';

export class StorageMock {
  public ready(): Promise<LocalForage> {
    return new Promise<LocalForage>(resolve => {
      resolve(null);
    })
  }

  public get(key: string): Promise<any> {
    return new Promise<any>(resolve => {
      switch (key) {
        case (AppConfiguration.CONFIG_SETUP_PERFORMED): {
          resolve(false);
          break;
        }
      }
    });
  }

  public set(key: string, value: any): Promise<any> {
    return new Promise<any>(resolve => {
      resolve(true);
    })
  }
}
