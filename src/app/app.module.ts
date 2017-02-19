import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {ProjectPage} from "../pages/project/project";
import {TabsPage} from "../pages/tabs/tabs";
import {ProjectDetailsPage} from "../pages/projectdetails/projectdetails";
import {BackersComponent} from "./backers/backers.component";
import {PerksComponent} from "./perks/perks.component";
import { ChartsModule } from 'ng2-charts';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'f8e8bd8a'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjectPage,
    ProjectDetailsPage,
    TabsPage,
    BackersComponent,
    PerksComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectPage,
    ProjectDetailsPage,
    TabsPage,
    BackersComponent,
    PerksComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
