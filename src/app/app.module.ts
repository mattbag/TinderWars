import { SettingsPage } from './../pages/settings/settings';
import { TinderCardsPage } from './../pages/tinder/tinder-cards';
import { ApisProvider } from './../providers/apis/apis';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    TinderCardsPage,
    AboutPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    TinderCardsPage,
    AboutPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApisProvider
  ]
})
export class AppModule {}
