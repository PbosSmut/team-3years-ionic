import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { TabsPage } from './tabs';

let comp: TabsPage;
let fixture: ComponentFixture<TabsPage>;

describe('Page: Tabs', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, TabsPage],
      providers: [],
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    comp = fixture.componentInstance;
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
