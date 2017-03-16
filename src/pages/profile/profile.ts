import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {Auth} from '../../app/services/auth.service';
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(public navCtrl: NavController, public auth: Auth) {}

  private navigate() {
    this.navCtrl.setRoot(LoginPage);
  }
}
