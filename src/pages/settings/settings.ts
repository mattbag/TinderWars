import { TinderCardsPage } from './../tinder/tinder-cards';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  ageValue: any;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.ageValue = {
  upper:1000,
  lower:18
}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    console.log(this.ageValue);
    
  }

  goHome(){
    this.nav.setRoot(TinderCardsPage);
  }

}
