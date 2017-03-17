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
import {FacebookLikesComponent} from "./graphs/facebookLikes/facebookLikes.component";
import {FacebookPostGraph} from "./graphs/facebookPostGraph/facebookPostGraph.component";
import {FacebookPostTable} from "./graphs/facebookPostTable/facebookPostTable.component";

import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Auth } from './services/auth.service';
import { Http } from '@angular/http';
import {ProfilePage} from "../pages/profile/profile";
import {Storage} from '@ionic/storage';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'f8e8bd8a'
  }
};

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}]
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProjectsPage,
    ProjectDetailsPage,
    TabsPage,
    ProfilePage,
    BackersComponent,
    PerksComponent,
    FundsComponent,
    TwitterFollowersComponent,
    TwitterFavsComponent,
    TwitterRetweetsComponent,
    InstagramFollowersComponent,
    FacebookLikesComponent,
    FacebookPostGraph,
    FacebookPostTable
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
    ProfilePage,
    BackersComponent,
    PerksComponent,
    FundsComponent,
    TwitterFollowersComponent,
    TwitterFavsComponent,
    TwitterRetweetsComponent,
    InstagramFollowersComponent,
    FacebookLikesComponent,
    FacebookPostGraph,
    FacebookPostTable
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }, Storage]
})
export class AppModule {}
