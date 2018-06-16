webpackJsonp([2],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bio__ = __webpack_require__(591);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioPageModule", function() { return BioPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BioPageModule = (function () {
    function BioPageModule() {
    }
    return BioPageModule;
}());
BioPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bio__["a" /* BioPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bio__["a" /* BioPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__bio__["a" /* BioPage */]
        ]
    })
], BioPageModule);

//# sourceMappingURL=bio.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_global__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioPage; });
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
 * Generated class for the BioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BioPage = (function () {
    function BioPage(navCtrl, navParams, viewCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.global = global;
    }
    BioPage.prototype.ionViewDidLoad = function () {
        // console.log('Person', this.navParams.get('person'));
        this.person = this.navParams.get('person');
        console.log(this.global.state['theme']);
    };
    BioPage.prototype.closeModal = function () {
        //  let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss();
    };
    return BioPage;
}());
BioPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-bio',template:/*ion-inline-start:"/Users/wised/Desktop/github/tinderwars/src/pages/bio/bio.html"*/'\n<ion-header class="{{global.state[\'theme\']}}">\n\n  <ion-toolbar>\n    <!--<button ion-button icon-only clear (click)="dismiss()">\n       <ion-icon name="ios-arrow-back"></ion-icon>\n    </button>-->\n    <ion-buttons start>\n      <button ion-button icon-only (click)="closeModal()">\n<ion-icon name="ios-arrow-back"></ion-icon>\n</button>\n    </ion-buttons>\n    <ion-title>{{person?.name}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding class="{{global.state[\'theme\']}}">\n  <img [src]="person?.img" style="width:100%">\n  <ion-list>\n    <ion-item>\n      Age: {{person?.birth_year}}\n    </ion-item>\n    <ion-item>\n      Eyes: {{person?.eye_color}}\n    </ion-item>\n    <ion-item>\n      Hieght: {{person?.height}}\n    </ion-item>\n\n  </ion-list>\n  <hr> Bio: <br>\n\n  <p>{{person?.bio}}</p>\n</ion-content>\n'/*ion-inline-end:"/Users/wised/Desktop/github/tinderwars/src/pages/bio/bio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__app_app_global__["a" /* AppState */]])
], BioPage);

//# sourceMappingURL=bio.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map