import { Component } from '@angular/core';
import {TabsPage} from "../tabs/tabs";
import {NavController} from "ionic-angular";
import {Auth} from '../../app/services/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public auth: Auth) {}

  private navigate() {
    this.navCtrl.setRoot(TabsPage);
  }
}
