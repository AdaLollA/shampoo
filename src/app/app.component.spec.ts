import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {IonicModule, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MockPlatform} from 'ionic-angular/util/mock-providers';
import {SplashScreenMock} from '../../test-config/mocks-ionic/splash-screen-mock';
import {StatusBarMock} from '../../test-config/mocks-ionic/status-bar-mock';
import {StorageMock} from '../../test-config/mocks-ionic/storage-mock';
import {MyApp} from './app.component';

describe('app.component.ts tests', () => {
  let fixture: ComponentFixture<MyApp>;
  let component: MyApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
      ],
      providers: [
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: MockPlatform},
        {provide: IonicStorageModule, useClass: StorageMock}
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('component should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('Providers should be created', () => {
    expect(component.platform).toBeTruthy();
    expect(component.statusBar).toBeTruthy();
    expect(component.splashScreen).toBeTruthy();
    expect(component.storage).toBeTruthy();
    expect(component.alertCtrl).toBeTruthy();
    expect(component.events).toBeTruthy();
  });

  it('should have two pages', () => {
    component.platform.ready().then(platform => {
      component.storage.ready().then(() => {
        expect(component.pages.length).toBe(2);
      })
    });
  });
});