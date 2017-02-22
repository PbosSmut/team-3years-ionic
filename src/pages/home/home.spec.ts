import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;

describe('Page: Home', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [MyApp, HomePage],
      providers: [],
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(HomePage);
    comp    = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });
});