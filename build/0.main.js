webpackJsonp([0],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_swing__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ships__ = __webpack_require__(593);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsPageModule", function() { return ShipsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShipsPageModule = (function () {
    function ShipsPageModule() {
    }
    return ShipsPageModule;
}());
ShipsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__ships__["a" /* ShipsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__ships__["a" /* ShipsPage */]),
            __WEBPACK_IMPORTED_MODULE_0_angular2_swing__["SwingModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__ships__["a" /* ShipsPage */]
        ]
    })
], ShipsPageModule);

//# sourceMappingURL=ships.module.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apis_apis__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_swing__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipsPage; });
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
 * Generated class for the ShipsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShipsPage = (function () {
    function ShipsPage(navCtrl, http, //public toastCtrl: ToastService,
        apis) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.apis = apis;
        this.pageCount = 1;
        this.stackConfig = {
            throwOutConfidence: function (offset, element) {
                // console.log(element);
                // was element/2
                return Math.min(Math.abs(offset) / (element / 3), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
    }
    ShipsPage.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            // console.log(event);
            // event.target.style.backgroundColor = '#ffffff';
            // event.target.style.background = '#ffffff';
            // console.log(event);
        });
        this.cards = [];
        this.showLoader = true;
        this.addNewCards(this.pageCount);
    };
    // Called whenever we drag an element
    ShipsPage.prototype.onItemMove = function (element, x, y, r) {
        // console.log(element);
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        if (x > 0) {
            color = '#' + hexCode + 'FF' + hexCode;
        }
        else {
            color = '#FF' + hexCode + hexCode;
        }
        // element.style.background = color;
        element.style.borderColor = color;
        // this.cardBG = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // Connected through HTML
    ShipsPage.prototype.voteUp = function (like) {
        this.cards.pop();
        // this.addNewCards(1);
        if (this.cards.length < 1) {
            console.log('going fetching');
            this.showLoader = true;
            this.addNewCards(this.pageCount);
        }
        // if (like) {
        //   this.toastCtrl.create('You liked: ' + removedCard.email);
        // } else {
        //   this.toastCtrl.create('You disliked: ' + removedCard.email);
        // }
    };
    // Add new cards to our array
    ShipsPage.prototype.addNewCards = function (count) {
        // this.http.get('https://randomuser.me/api/?results=' + count)
        //   .map(data => data.json().results)
        //   .subscribe(result => {
        //     for (let val of result) {
        //       // this.cards.push(val);
        //       console.log(val);
        var _this = this;
        //     }
        //   })
        this.apis.getShips(this.pageCount).subscribe(function (data) {
            _this.swapi_ships = data.results;
            // console.log(data);
            _this.swapi_ships.map(function (x) {
                // console.log(x);
                _this.apis.searchWiki(x.name).subscribe(function (data) {
                    // this.wiki_data = data.results; 
                    // console.log(data.items[0].id);
                    var _id = data.items[0].id;
                    _this.apis.getImages(_id).subscribe(function (data) {
                        // this.wiki_data = data.results; 
                        // console.log(data);
                        x.img = data.items[_id].thumbnail;
                        // console.log(x);
                        _this.cards.push(x);
                        console.log(_this.cards);
                    }, function (err) {
                        console.log(err);
                    }, function () { return console.log('Image map Complete'); });
                }, function (err) {
                    console.log(err);
                }, function () { return console.log('Wikia Search Complete'); });
            });
        }, function (err) {
            console.log(err);
        }, function () {
            _this.pageCount++,
                // console.log(this.pageCount);
                // this is meh
                setTimeout(function () { _this.showLoader = false; }, 1000);
            console.log('Swapi Request Complete');
        });
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    ShipsPage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    return ShipsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myswing1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["SwingStackComponent"])
], ShipsPage.prototype, "swingStack", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChildren"])('mycards1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["QueryList"])
], ShipsPage.prototype, "swingCards", void 0);
ShipsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-ships',template:/*ion-inline-start:"/Users/wised/Desktop/github/ionic-wars/src/pages/ships/ships.html"*/'<!--\n  Generated template for the ShipsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Oh yeah!</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let card of cards" class="td-card">\n      <ion-item>\n        <img *ngIf="card.img" [src]="card.img">\n        <h1>{{ card.name }}</h1>\n        <p>Max Atmosphering Speed: {{ card.max_atmosphering_speed }}</p>\n      </ion-item>\n     \n    </ion-card>\n  </div>\n</ion-content>\n<ion-content padding *ngIf="showLoader">\n<div class="card_loader"><ion-icon name="md-flame" color="danger"></ion-icon></div>\n</ion-content>\n\n<ion-footer>\n  <div class="tinder-footer">\n    <div id="swipe_dislike" class="rate" (click)="voteUp(false)">\n <ion-icon name="md-close" color="danger"></ion-icon>\n    </div>\n    <!--<div class="info"></div>-->\n    <div id="swipe_like" class="rate" (click)="voteUp(true)">\n      <ion-icon name="md-heart" color="secondary"></ion-icon>\n    </div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/wised/Desktop/github/ionic-wars/src/pages/ships/ships.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_apis_apis__["a" /* ApisProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_apis_apis__["a" /* ApisProvider */]])
], ShipsPage);

//# sourceMappingURL=ships.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map