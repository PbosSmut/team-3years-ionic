import { Component } from '@angular/core';
import {TabsPage} from "../tabs/tabs";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {}

  private navigate() {
    this.navCtrl.setRoot(TabsPage);
  }
}
