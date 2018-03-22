import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicStorageModule} from '@ionic/storage';
import {RiotGamesProvider, RiotGamesProviderMock} from '../../providers/riot-games/riot-games';
import {HomePage} from './home';
import {IonicModule, NavController} from 'ionic-angular/index';

describe('home.ts test', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage),
        IonicStorageModule.forRoot()
      ],
      providers: [
        NavController,
        {provide: RiotGamesProvider, useClass: RiotGamesProviderMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create component', () => expect(component).toBeDefined());
});
