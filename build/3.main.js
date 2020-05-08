webpackJsonp([3], {
  /***/ 586: /***/ function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
      1
    );
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(
      54
    );
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(
      590
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      "AboutPageModule",
      function () {
        return AboutPageModule;
      }
    );
    var __decorate =
      (this && this.__decorate) ||
      function (decorators, target, key, desc) {
        var c = arguments.length,
          r =
            c < 3
              ? target
              : desc === null
              ? (desc = Object.getOwnPropertyDescriptor(target, key))
              : desc,
          d;
        if (
          typeof Reflect === "object" &&
          typeof Reflect.decorate === "function"
        )
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
              r =
                (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

    var AboutPageModule = (function () {
      function AboutPageModule() {}
      return AboutPageModule;
    })();
    AboutPageModule = __decorate(
      [
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]
        )({
          declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
          ],
          imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__[
              "d" /* IonicPageModule */
            ].forChild(
              __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
            ),
          ],
          exports: [__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]],
        }),
      ],
      AboutPageModule
    );

    //# sourceMappingURL=about.module.js.map

    /***/
  },

  /***/ 590: /***/ function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
      1
    );
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(
      54
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      "a",
      function () {
        return AboutPage;
      }
    );
    var __decorate =
      (this && this.__decorate) ||
      function (decorators, target, key, desc) {
        var c = arguments.length,
          r =
            c < 3
              ? target
              : desc === null
              ? (desc = Object.getOwnPropertyDescriptor(target, key))
              : desc,
          d;
        if (
          typeof Reflect === "object" &&
          typeof Reflect.decorate === "function"
        )
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
              r =
                (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata =
      (this && this.__metadata) ||
      function (k, v) {
        if (
          typeof Reflect === "object" &&
          typeof Reflect.metadata === "function"
        )
          return Reflect.metadata(k, v);
      };

    /**
     * Generated class for the AboutPage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    var AboutPage = (function () {
      function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
      }
      return AboutPage;
    })();
    AboutPage = __decorate(
      [
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */]
        )(),
        __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]
        )({
          selector: "page-about",
          template:
            /*ion-inline-start:"/Users/wised/Desktop/github/tinderwars/src/pages/about/about.html"*/ '<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Now the credits</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>This sample was built for the <a href="http://blog.ionic.io/become-an-ionic-jedi-hackster/" target="_blank">Ionic Jedi Hackaton</a></p>\n  <hr>\n  <p>After a few hours of tinkering (and after a solid week of work) I couldn\'t come up with a better and funnier idea, especially\n    because the api seems pretty limited to me. So I decided to cross merge 2 api to gather the images and took this as a\n    learning experience. I also ditched the code prettiness to take some hours off. But it was a great idea and let\'s do\n    it again!</p>\n  <hr>\n  <p>To speed up the process I used some great resources:</p>\n  <ion-list>\n    <ion-list-header>\n      Components\n    </ion-list-header>\n    <ion-item><a href="https://github.com/yannbf/ionic3-components" target="_blank">Tinder UI</a></ion-item>\n    <ion-item><a href="https://github.com/yannbf/ionic3-components" target="_blank">App theme switcher</a></ion-item>\n\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Apis\n    </ion-list-header>\n    <ion-item> <a href="https://swapi.dev" target="_blank">Swapi</a></ion-item>\n    <ion-item> <a href="http://starwars.wikia.com" target="_blank">Wookieepedia</a></ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title><a href="https://mattbag.github.io" target="_blank">my Hub</a></ion-title>\n  </ion-toolbar>\n</ion-footer>\n' /*ion-inline-end:"/Users/wised/Desktop/github/tinderwars/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [
          __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
          __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        ]),
      ],
      AboutPage
    );

    //# sourceMappingURL=about.js.map

    /***/
  },
});
//# sourceMappingURL=3.main.js.map
