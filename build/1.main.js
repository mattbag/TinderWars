webpackJsonp([1],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
        ]
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tinder_tinder_cards__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_global__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(nav, navParams, storage, global) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.storage = storage;
        this.global = global;
        this.ageValue = {
            upper: 1000,
            lower: 18
        };
        this.storage.get('theme').then(function (val) {
            if (val === 'sith-theme') {
                _this.themeName = 'Sith';
            }
            else {
                _this.themeName = 'Jedi';
            }
            //  console.log('theme on: ', val);
        });
    }
    SettingsPage.prototype.changeTheme = function (event) {
        this.theme = event.checked ? 'sith-theme' : '';
        this.themeName = event.checked ? 'Sith' : 'Jedi';
        this.global.set('theme', this.theme);
        this.storage.set('theme', this.theme);
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SettingsPage');
        // console.log(this.ageValue);
    };
    SettingsPage.prototype.goHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__tinder_tinder_cards__["a" /* TinderCardsPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/wised/Desktop/github/tinderwars/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-toolbar>\n    <!--<ion-buttons start>-->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--</ion-buttons>-->\n    <ion-title>Settings</ion-title>\n    <ion-buttons end>\n       <button ion-button (click)="goHome()">\n      <ion-icon name="md-flame" color="danger"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n  <ion-label>{{themeName}} theme</ion-label>\n  <ion-toggle color="danger" (ionChange)="changeTheme($event)" [checked]="global.state[\'theme\'] === \'sith-theme\'"></ion-toggle>\n</ion-item>\n\n  <ion-item>\n    <ion-label expand>Age range: \n      <ion-badge color="primary">\n{{ageValue.lower}} BBY\n</ion-badge>\n-\n <ion-badge color="primary">\n{{ageValue.upper}} BBY\n</ion-badge>\n</ion-label>\n    <ion-range dualKnobs="true" [(ngModel)]="ageValue" min="18" max="1000" step="1" snaps="false"></ion-range>\n  </ion-item>\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/wised/Desktop/github/tinderwars/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__app_app_global__["a" /* AppState */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map