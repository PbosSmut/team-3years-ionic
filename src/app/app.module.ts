import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {ProjectsPage} from "../pages/projects/projects";
import {TabsPage} from "../pages/tabs/tabs";
import {ProjectDetailsPage} from "../pages/projectDetails/projectDetails";
import {BackersComponent} from "./graphs/backers/backers.component";
import {PerksComponent} from "./graphs/perks/perks.component";
import { ChartsModule } from 'ng2-charts';
import {FundsPieComponent} from "./graphs/funds/fundsPie.component";
import {FundsComponent} from "./graphs/funds/funds.component";
import {TwitterFollowersComponent} from "./graphs/twitterFollowers/twitterFollowers.component";
import {TwitterFavsComponent} from "./graphs/twitterFavs/twitterFavs.component";
import {TwitterRetweetsComponent} from "./graphs/twitterRetweets/twitterRetweets.component";
import {InstagramFollowersComponent} from "./graphs/instagramFollowers/instagramFollowers.component";


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'f8e8bd8a'
  }
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProjectsPage,
    ProjectDetailsPage,
    TabsPage,
    BackersComponent,
    PerksComponent,
    FundsComponent,
    TwitterFollowersComponent,
    TwitterFavsComponent,
    TwitterRetweetsComponent,
    InstagramFollowersComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProjectsPage,
    ProjectDetailsPage,
    TabsPage,
    BackersComponent,
    PerksComponent,
    FundsComponent,
    TwitterFollowersComponent,
    TwitterFavsComponent,
    TwitterRetweetsComponent,
    InstagramFollowersComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
