import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {ProjectsPage} from "../pages/projects/projects";
import {TabsPage} from "../pages/tabs/tabs";
import {IndiegogoDetailsPage} from "../pages/indiegogodetails/indiegogodetails";
import {BackersComponent} from "./backers/backers.component";
import {PerksComponent} from "./perks/perks.component";
import { ChartsModule } from 'ng2-charts';
import {FundsPieComponent} from "./funds/fundsPie.component";
import {FundsComponent} from "./funds/funds.component";


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
    IndiegogoDetailsPage,
    TabsPage,
    BackersComponent,
    PerksComponent,
    FundsComponent
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
    IndiegogoDetailsPage,
    TabsPage,
    BackersComponent,
    PerksComponent,
    FundsComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
