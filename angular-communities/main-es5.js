function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/main/main.component */
    "./src/app/pages/main/main.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngcommunity-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngcommunity-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngcommunity-footer");
        }
      },
      directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/pages.module */
    "./src/app/pages/pages.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/main/components/map/map.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/main/components/map/map.component.ts ***!
    \************************************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppPagesMainComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MapComponent_map_marker_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "map-marker", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function MapComponent_map_marker_1_Template_map_marker_mapClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.openInfo(_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var marker_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", marker_r1.position)("label", marker_r1.label)("title", marker_r1.title)("options", marker_r1.options);
      }
    }

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent() {
        _classCallCheck(this, MapComponent);

        this.community = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.markers = [];
        this.zoom = 11;
        this.options = {
          zoomControl: false,
          scrollwheel: true,
          disableDoubleClickZoom: true,
          maxZoom: 15,
          minZoom: 4
        };
      }

      _createClass(MapComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.addCommunities();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          navigator.geolocation.getCurrentPosition(function (_ref) {
            var coords = _ref.coords;
            _this.center = {
              lat: coords.latitude,
              lng: coords.longitude
            };
          });
        }
      }, {
        key: "zoomIn",
        value: function zoomIn() {
          if (this.zoom < this.options.maxZoom) {
            this.zoom++;
          }
        }
      }, {
        key: "zoomOut",
        value: function zoomOut() {
          if (this.zoom > this.options.minZoom) {
            this.zoom--;
          }
        }
      }, {
        key: "addCommunities",
        value: function addCommunities() {
          var communities = Object.entries(this.communities);

          for (var _i = 0, _communities = communities; _i < _communities.length; _i++) {
            var _communities$_i = _slicedToArray(_communities[_i], 2),
                name = _communities$_i[0],
                community = _communities$_i[1];

            this.markers.push({
              position: community.position,
              title: name,
              options: {
                icon: {
                  url: "assets/images/".concat(community.id, ".png"),
                  scaledSize: {
                    height: 48,
                    width: 48
                  }
                }
              }
            });
          }
        }
      }, {
        key: "openInfo",
        value: function openInfo(marker) {
          var community = this.communities[marker.getTitle()];
          this.community.emit(community);
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)();
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["ngcommunity-map"]],
      viewQuery: function MapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        }
      },
      inputs: {
        communities: "communities"
      },
      outputs: {
        community: "community"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 4,
      consts: [["height", "100%", "width", "100%", 3, "center", "options", "zoom"], [3, "position", "label", "title", "options", "mapClick", 4, "ngFor", "ngForOf"], [3, "position", "label", "title", "options", "mapClick"], ["markerElem", ""]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "google-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapComponent_map_marker_1_Template, 2, 4, "map-marker", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("center", ctx.center)("options", ctx.options)("zoom", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        }
      },
      directives: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapMarker"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngcommunity-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.scss']
        }]
      }], null, {
        map: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
            "static": false
          }]
        }],
        community: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        communities: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/main/components/sidenav/sidenav.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/main/components/sidenav/sidenav.component.ts ***!
    \********************************************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppPagesMainComponentsSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SidenavComponent_ng_container_1_p_9_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var organizer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", organizer_r4.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SidenavComponent_ng_container_1_p_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_ng_container_1_p_9_a_2_Template, 2, 1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var organizer_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", organizer_r4.name, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", organizer_r4.twitter);
      }
    }

    function SidenavComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Organizers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidenavComponent_ng_container_1_p_9_Template, 3, 2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.community.web, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx_r0.community.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.community.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.community.organizers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.community.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.community.web, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SidenavComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Communities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Communities");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SidenavComponent = /*#__PURE__*/function () {
      function SidenavComponent() {
        _classCallCheck(this, SidenavComponent);
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
      return new (t || SidenavComponent)();
    };

    SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidenavComponent,
      selectors: [["ngcommunity-sidenav"]],
      inputs: {
        community: "community"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "profile-card"], [4, "ngIf", "ngIfElse"], ["default", ""], ["target", "_blank", 3, "href"], [3, "src"], [1, "profile-bio"], [4, "ngFor", "ngForOf"], [1, "profile-social-links"], ["src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"], ["src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"], ["class", "profile-social-links", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "profile-social-links", 3, "href"]],
      template: function SidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_ng_container_1_Template, 17, 6, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_ng_template_2_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.community)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  display: block;\n  width: 200px;\n}\n\naside[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background: url(https://s-media-cache-ak0.pinimg.com/736x/3a/1f/02/3a1f02c10700daa80655a302c5a27acf.jpg);\n  background-size: cover;\n  overflow: hidden;\n  box-shadow: 0 0 100px 10px #fff;\n  transition: all ease 0.3s;\n}\n\naside[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-animation: profile_image 2000ms linear both;\n          animation: profile_image 2000ms linear both;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\nheader[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);\n  font-size: 25px;\n  line-height: 25px;\n  display: inline-block;\n  padding: 10px;\n  transition: all ease 0.25s;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n}\n\naside[_ngcontent-%COMP%]:hover   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  outline: 0 solid #fff;\n  border-top: 0px solid #fff;\n  border-bottom: 1px solid #fff;\n}\n\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 0px;\n  margin: 0;\n}\n\n.profile-bio[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 1px 20px 10px 20px !important;\n  transition: all linear 1.5s;\n  color: #fff;\n  font-size: 14px;\n  opacity: 0;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.42) 49%, rgba(0, 0, 0, 0.61) 100%);\n}\n\naside[_ngcontent-%COMP%]:hover   .profile-bio[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.profile-bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-align: center;\n  font-size: 16px;\n}\n\n.profile-social-links[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: -440px;\n  margin-left: -100px;\n  list-style-type: none;\n  opacity: 0;\n  transition: all ease 0.5s;\n}\n\naside[_ngcontent-%COMP%]:hover   .profile-social-links[_ngcontent-%COMP%] {\n  margin-left: -30px;\n  opacity: 1;\n}\n\n.profile-social-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  background: #fff;\n  border-radius: 50%;\n  padding: 5px;\n}\n\n\n\n@-webkit-keyframes profile_image {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  3.4% {\n    transform: matrix3d(1.032, 0, 0, 0, 0, 1.041, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  4.7% {\n    transform: matrix3d(1.045, 0, 0, 0, 0, 1.06, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  6.81% {\n    transform: matrix3d(1.066, 0, 0, 0, 0, 1.089, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  9.41% {\n    transform: matrix3d(1.088, 0, 0, 0, 0, 1.117, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  10.21% {\n    transform: matrix3d(1.094, 0, 0, 0, 0, 1.123, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  13.61% {\n    transform: matrix3d(1.112, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  14.11% {\n    transform: matrix3d(1.114, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  17.52% {\n    transform: matrix3d(1.121, 0, 0, 0, 0, 1.124, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  18.72% {\n    transform: matrix3d(1.121, 0, 0, 0, 0, 1.119, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  21.32% {\n    transform: matrix3d(1.12, 0, 0, 0, 0, 1.107, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  24.32% {\n    transform: matrix3d(1.115, 0, 0, 0, 0, 1.096, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  25.23% {\n    transform: matrix3d(1.113, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.03% {\n    transform: matrix3d(1.106, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.93% {\n    transform: matrix3d(1.105, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  35.54% {\n    transform: matrix3d(1.098, 0, 0, 0, 0, 1.096, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  36.74% {\n    transform: matrix3d(1.097, 0, 0, 0, 0, 1.098, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  41.04% {\n    transform: matrix3d(1.096, 0, 0, 0, 0, 1.102, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  44.44% {\n    transform: matrix3d(1.097, 0, 0, 0, 0, 1.103, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  52.15% {\n    transform: matrix3d(1.099, 0, 0, 0, 0, 1.101, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  59.86% {\n    transform: matrix3d(1.101, 0, 0, 0, 0, 1.099, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  63.26% {\n    transform: matrix3d(1.101, 0, 0, 0, 0, 1.099, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  75.28% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  85.49% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  90.69% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n\n@keyframes profile_image {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  3.4% {\n    transform: matrix3d(1.032, 0, 0, 0, 0, 1.041, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  4.7% {\n    transform: matrix3d(1.045, 0, 0, 0, 0, 1.06, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  6.81% {\n    transform: matrix3d(1.066, 0, 0, 0, 0, 1.089, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  9.41% {\n    transform: matrix3d(1.088, 0, 0, 0, 0, 1.117, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  10.21% {\n    transform: matrix3d(1.094, 0, 0, 0, 0, 1.123, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  13.61% {\n    transform: matrix3d(1.112, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  14.11% {\n    transform: matrix3d(1.114, 0, 0, 0, 0, 1.133, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  17.52% {\n    transform: matrix3d(1.121, 0, 0, 0, 0, 1.124, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  18.72% {\n    transform: matrix3d(1.121, 0, 0, 0, 0, 1.119, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  21.32% {\n    transform: matrix3d(1.12, 0, 0, 0, 0, 1.107, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  24.32% {\n    transform: matrix3d(1.115, 0, 0, 0, 0, 1.096, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  25.23% {\n    transform: matrix3d(1.113, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.03% {\n    transform: matrix3d(1.106, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  29.93% {\n    transform: matrix3d(1.105, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  35.54% {\n    transform: matrix3d(1.098, 0, 0, 0, 0, 1.096, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  36.74% {\n    transform: matrix3d(1.097, 0, 0, 0, 0, 1.098, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  41.04% {\n    transform: matrix3d(1.096, 0, 0, 0, 0, 1.102, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  44.44% {\n    transform: matrix3d(1.097, 0, 0, 0, 0, 1.103, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  52.15% {\n    transform: matrix3d(1.099, 0, 0, 0, 0, 1.101, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  59.86% {\n    transform: matrix3d(1.101, 0, 0, 0, 0, 1.099, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  63.26% {\n    transform: matrix3d(1.101, 0, 0, 0, 0, 1.099, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  75.28% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  85.49% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  90.69% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n\n\n\naside[_ngcontent-%COMP%]:hover   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  -webkit-animation: name_and_job 1500ms linear both;\n          animation: name_and_job 1500ms linear both;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n@-webkit-keyframes name_and_job {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1);\n  }\n  1.3% {\n    transform: matrix3d(3.905, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -237.02, 0, 0, 1);\n  }\n  2.55% {\n    transform: matrix3d(4.554, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -182.798, 0, 0, 1);\n  }\n  4.1% {\n    transform: matrix3d(4.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -125.912, 0, 0, 1);\n  }\n  5.71% {\n    transform: matrix3d(3.039, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -79.596, 0, 0, 1);\n  }\n  8.11% {\n    transform: matrix3d(1.82, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -31.647, 0, 0, 1);\n  }\n  8.81% {\n    transform: matrix3d(1.581, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -21.84, 0, 0, 1);\n  }\n  11.96% {\n    transform: matrix3d(1.034, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.825, 0, 0, 1);\n  }\n  12.11% {\n    transform: matrix3d(1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.53, 0, 0, 1);\n  }\n  15.07% {\n    transform: matrix3d(0.947, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 12.662, 0, 0, 1);\n  }\n  16.12% {\n    transform: matrix3d(0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 13.007, 0, 0, 1);\n  }\n  27.23% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.352, 0, 0, 1);\n  }\n  27.58% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.121, 0, 0, 1);\n  }\n  38.34% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.311, 0, 0, 1);\n  }\n  40.09% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.291, 0, 0, 1);\n  }\n  50% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.048, 0, 0, 1);\n  }\n  60.56% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.007, 0, 0, 1);\n  }\n  82.78% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n\n@keyframes name_and_job {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1);\n  }\n  1.3% {\n    transform: matrix3d(3.905, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -237.02, 0, 0, 1);\n  }\n  2.55% {\n    transform: matrix3d(4.554, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -182.798, 0, 0, 1);\n  }\n  4.1% {\n    transform: matrix3d(4.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -125.912, 0, 0, 1);\n  }\n  5.71% {\n    transform: matrix3d(3.039, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -79.596, 0, 0, 1);\n  }\n  8.11% {\n    transform: matrix3d(1.82, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -31.647, 0, 0, 1);\n  }\n  8.81% {\n    transform: matrix3d(1.581, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -21.84, 0, 0, 1);\n  }\n  11.96% {\n    transform: matrix3d(1.034, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.825, 0, 0, 1);\n  }\n  12.11% {\n    transform: matrix3d(1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.53, 0, 0, 1);\n  }\n  15.07% {\n    transform: matrix3d(0.947, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 12.662, 0, 0, 1);\n  }\n  16.12% {\n    transform: matrix3d(0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 13.007, 0, 0, 1);\n  }\n  27.23% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.352, 0, 0, 1);\n  }\n  27.58% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.121, 0, 0, 1);\n  }\n  38.34% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.311, 0, 0, 1);\n  }\n  40.09% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.291, 0, 0, 1);\n  }\n  50% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.048, 0, 0, 1);\n  }\n  60.56% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.007, 0, 0, 1);\n  }\n  82.78% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n\naside[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  -webkit-animation: social_animation 2000ms ease-in-out both;\n          animation: social_animation 2000ms ease-in-out both;\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n\naside[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation: social_animation 2000ms ease-in-out both;\n          animation: social_animation 2000ms ease-in-out both;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\naside[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation: social_animation 2000ms ease-in-out both;\n          animation: social_animation 2000ms ease-in-out both;\n  -webkit-animation-delay: 1.25s;\n          animation-delay: 1.25s;\n}\n\n@-webkit-keyframes social_animation {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1);\n  }\n  1.3% {\n    transform: matrix3d(3.905, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -237.02, 0, 0, 1);\n  }\n  2.55% {\n    transform: matrix3d(4.554, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -182.798, 0, 0, 1);\n  }\n  4.1% {\n    transform: matrix3d(4.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -125.912, 0, 0, 1);\n  }\n  5.71% {\n    transform: matrix3d(3.039, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -79.596, 0, 0, 1);\n  }\n  8.11% {\n    transform: matrix3d(1.82, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -31.647, 0, 0, 1);\n  }\n  8.81% {\n    transform: matrix3d(1.581, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -21.84, 0, 0, 1);\n  }\n  11.96% {\n    transform: matrix3d(1.034, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.825, 0, 0, 1);\n  }\n  12.11% {\n    transform: matrix3d(1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.53, 0, 0, 1);\n  }\n  15.07% {\n    transform: matrix3d(0.947, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 12.662, 0, 0, 1);\n  }\n  16.12% {\n    transform: matrix3d(0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 13.007, 0, 0, 1);\n  }\n  27.23% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.352, 0, 0, 1);\n  }\n  27.58% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.121, 0, 0, 1);\n  }\n  38.34% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.311, 0, 0, 1);\n  }\n  40.09% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.291, 0, 0, 1);\n  }\n  50% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.048, 0, 0, 1);\n  }\n  60.56% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.007, 0, 0, 1);\n  }\n  82.78% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n\n@keyframes social_animation {\n  0% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1);\n  }\n  1.3% {\n    transform: matrix3d(3.905, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -237.02, 0, 0, 1);\n  }\n  2.55% {\n    transform: matrix3d(4.554, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -182.798, 0, 0, 1);\n  }\n  4.1% {\n    transform: matrix3d(4.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -125.912, 0, 0, 1);\n  }\n  5.71% {\n    transform: matrix3d(3.039, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -79.596, 0, 0, 1);\n  }\n  8.11% {\n    transform: matrix3d(1.82, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -31.647, 0, 0, 1);\n  }\n  8.81% {\n    transform: matrix3d(1.581, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -21.84, 0, 0, 1);\n  }\n  11.96% {\n    transform: matrix3d(1.034, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.825, 0, 0, 1);\n  }\n  12.11% {\n    transform: matrix3d(1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.53, 0, 0, 1);\n  }\n  15.07% {\n    transform: matrix3d(0.947, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 12.662, 0, 0, 1);\n  }\n  16.12% {\n    transform: matrix3d(0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 13.007, 0, 0, 1);\n  }\n  27.23% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.352, 0, 0, 1);\n  }\n  27.58% {\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.121, 0, 0, 1);\n  }\n  38.34% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.311, 0, 0, 1);\n  }\n  40.09% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.291, 0, 0, 1);\n  }\n  50% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.048, 0, 0, 1);\n  }\n  60.56% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.007, 0, 0, 1);\n  }\n  82.78% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n  100% {\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItY29tbXVuaXRpZXMvYW5ndWxhci1jb21tdW5pdGllcy9zcmMvYXBwL3BhZ2VzL21haW4vY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4vY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Qsd0dBQUE7RUFDQyxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREtBO0VBQ0UsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsOEdBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRkY7O0FESUEseUJBQUE7O0FBRUE7RUFDRTtJQUNFLG1FQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7QUFDRjs7QUQ1RUE7RUFDRTtJQUNFLG1FQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDBFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLDJFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7RURJQTtJQUNFLHVFQUFBO0VDRkY7QUFDRjs7QURJQSxnQkFBQTs7QUFFQTtFQUNFLGtEQUFBO1VBQUEsMENBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDSEY7O0FETUE7RUFDRTtJQUNFLHNFQUFBO0VDSEY7RURLQTtJQUNFLDZFQUFBO0VDSEY7RURLQTtJQUNFLDhFQUFBO0VDSEY7RURLQTtJQUNFLDhFQUFBO0VDSEY7RURLQTtJQUNFLDZFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDJFQUFBO0VDSEY7RURLQTtJQUNFLDBFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDJFQUFBO0VDSEY7RURLQTtJQUNFLDJFQUFBO0VDSEY7RURLQTtJQUNFLHdFQUFBO0VDSEY7RURLQTtJQUNFLHdFQUFBO0VDSEY7RURLQTtJQUNFLHdFQUFBO0VDSEY7RURLQTtJQUNFLHVFQUFBO0VDSEY7RURLQTtJQUNFLG1FQUFBO0VDSEY7RURLQTtJQUNFLG1FQUFBO0VDSEY7QUFDRjs7QUR0REE7RUFDRTtJQUNFLHNFQUFBO0VDSEY7RURLQTtJQUNFLDZFQUFBO0VDSEY7RURLQTtJQUNFLDhFQUFBO0VDSEY7RURLQTtJQUNFLDhFQUFBO0VDSEY7RURLQTtJQUNFLDZFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDJFQUFBO0VDSEY7RURLQTtJQUNFLDBFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDRFQUFBO0VDSEY7RURLQTtJQUNFLDJFQUFBO0VDSEY7RURLQTtJQUNFLDJFQUFBO0VDSEY7RURLQTtJQUNFLHdFQUFBO0VDSEY7RURLQTtJQUNFLHdFQUFBO0VDSEY7RURLQTtJQUNFLHdFQUFBO0VDSEY7RURLQTtJQUNFLHVFQUFBO0VDSEY7RURLQTtJQUNFLG1FQUFBO0VDSEY7RURLQTtJQUNFLG1FQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFLDJEQUFBO1VBQUEsbURBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDSkY7O0FET0E7RUFDRSwyREFBQTtVQUFBLG1EQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UsMkRBQUE7VUFBQSxtREFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNKRjs7QURPQTtFQUNFO0lBQ0Usc0VBQUE7RUNKRjtFRE1BO0lBQ0UsNkVBQUE7RUNKRjtFRE1BO0lBQ0UsOEVBQUE7RUNKRjtFRE1BO0lBQ0UsOEVBQUE7RUNKRjtFRE1BO0lBQ0UsNkVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsMkVBQUE7RUNKRjtFRE1BO0lBQ0UsMEVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsMkVBQUE7RUNKRjtFRE1BO0lBQ0UsMkVBQUE7RUNKRjtFRE1BO0lBQ0Usd0VBQUE7RUNKRjtFRE1BO0lBQ0Usd0VBQUE7RUNKRjtFRE1BO0lBQ0Usd0VBQUE7RUNKRjtFRE1BO0lBQ0UsdUVBQUE7RUNKRjtFRE1BO0lBQ0UsbUVBQUE7RUNKRjtFRE1BO0lBQ0UsbUVBQUE7RUNKRjtBQUNGOztBRHJEQTtFQUNFO0lBQ0Usc0VBQUE7RUNKRjtFRE1BO0lBQ0UsNkVBQUE7RUNKRjtFRE1BO0lBQ0UsOEVBQUE7RUNKRjtFRE1BO0lBQ0UsOEVBQUE7RUNKRjtFRE1BO0lBQ0UsNkVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsMkVBQUE7RUNKRjtFRE1BO0lBQ0UsMEVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsNEVBQUE7RUNKRjtFRE1BO0lBQ0UsMkVBQUE7RUNKRjtFRE1BO0lBQ0UsMkVBQUE7RUNKRjtFRE1BO0lBQ0Usd0VBQUE7RUNKRjtFRE1BO0lBQ0Usd0VBQUE7RUNKRjtFRE1BO0lBQ0Usd0VBQUE7RUNKRjtFRE1BO0lBQ0UsdUVBQUE7RUNKRjtFRE1BO0lBQ0UsbUVBQUE7RUNKRjtFRE1BO0lBQ0UsbUVBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaGVhZGVyIGltZyB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5hc2lkZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvM2EvMWYvMDIvM2ExZjAyYzEwNzAwZGFhODA2NTVhMzAyYzVhMjdhY2YuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IDEwcHggI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcbn1cblxuXG5cbmFzaWRlIGhlYWRlciBpbWcge1xuICBhbmltYXRpb246IHByb2ZpbGVfaW1hZ2UgMjAwMG1zIGxpbmVhciBib3RoO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG5cbmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4yNTBzO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbmFzaWRlOmhvdmVyIGhlYWRlciBoMSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgb3V0bGluZTogMCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbmhlYWRlciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9maWxlLWJpbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDFweCAyMHB4IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDEuNXM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgNDklLCByZ2JhKDAsIDAsIDAsIDAuNjEpIDEwMCUpO1xufVxuXG5hc2lkZTpob3ZlciAucHJvZmlsZS1iaW8ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucHJvZmlsZS1iaW8gcDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucHJvZmlsZS1zb2NpYWwtbGlua3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC00NDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xufVxuXG5hc2lkZTpob3ZlciAucHJvZmlsZS1zb2NpYWwtbGlua3Mge1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wcm9maWxlLXNvY2lhbC1saW5rcyBsaSBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4vKlBST0ZJTEUgSU1BR0UgQU5JTUFURSAqL1xuXG5Aa2V5ZnJhbWVzIHByb2ZpbGVfaW1hZ2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICAzLjQlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDMyLCAwLCAwLCAwLCAwLCAxLjA0MSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgNC43JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA0NSwgMCwgMCwgMCwgMCwgMS4wNiwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgNi44MSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4wNjYsIDAsIDAsIDAsIDAsIDEuMDg5LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICA5LjQxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA4OCwgMCwgMCwgMCwgMCwgMS4xMTcsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEwLjIxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NCwgMCwgMCwgMCwgMCwgMS4xMjMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEzLjYxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjExMiwgMCwgMCwgMCwgMCwgMS4xMzMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDE0LjExJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjExNCwgMCwgMCwgMCwgMCwgMS4xMzMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDE3LjUyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEyMSwgMCwgMCwgMCwgMCwgMS4xMjQsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDE4LjcyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEyMSwgMCwgMCwgMCwgMCwgMS4xMTksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDIxLjMyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEyLCAwLCAwLCAwLCAwLCAxLjEwNywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgMjQuMzIlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMTE1LCAwLCAwLCAwLCAwLCAxLjA5NiwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgMjUuMjMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMTEzLCAwLCAwLCAwLCAwLCAxLjA5NCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgMjkuMDMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMTA2LCAwLCAwLCAwLCAwLCAxLjA5LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICAyOS45MyUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4xMDUsIDAsIDAsIDAsIDAsIDEuMDksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDM1LjU0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5OCwgMCwgMCwgMCwgMCwgMS4wOTYsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDM2Ljc0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NywgMCwgMCwgMCwgMCwgMS4wOTgsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDQxLjA0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NiwgMCwgMCwgMCwgMCwgMS4xMDIsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDQ0LjQ0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NywgMCwgMCwgMCwgMCwgMS4xMDMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDUyLjE1JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5OSwgMCwgMCwgMCwgMCwgMS4xMDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDU5Ljg2JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEwMSwgMCwgMCwgMCwgMCwgMS4wOTksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDYzLjI2JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEwMSwgMCwgMCwgMCwgMCwgMS4wOTksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDc1LjI4JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEsIDAsIDAsIDAsIDAsIDEuMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgODUuNDklIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMSwgMCwgMCwgMCwgMCwgMS4xLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICA5MC42OSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4xLCAwLCAwLCAwLCAwLCAxLjEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4xLCAwLCAwLCAwLCAwLCAxLjEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG59XG4vKk5BTUUgQU5JTUFURSAqL1xuXG5hc2lkZTpob3ZlciBoZWFkZXIgaDEge1xuICBhbmltYXRpb246IG5hbWVfYW5kX2pvYiAxNTAwbXMgbGluZWFyIGJvdGg7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuQGtleWZyYW1lcyBuYW1lX2FuZF9qb2Ige1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMzAwLCAwLCAwLCAxKTtcbiAgfVxuICAxLjMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDMuOTA1LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMjM3LjAyLCAwLCAwLCAxKTtcbiAgfVxuICAyLjU1JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCg0LjU1NCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTE4Mi43OTgsIDAsIDAsIDEpO1xuICB9XG4gIDQuMSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoNC4wMjUsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0xMjUuOTEyLCAwLCAwLCAxKTtcbiAgfVxuICA1LjcxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgzLjAzOSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTc5LjU5NiwgMCwgMCwgMSk7XG4gIH1cbiAgOC4xMSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS44MiwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTMxLjY0NywgMCwgMCwgMSk7XG4gIH1cbiAgOC44MSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS41ODEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0yMS44NCwgMCwgMCwgMSk7XG4gIH1cbiAgMTEuOTYlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDM0LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0LjgyNSwgMCwgMCwgMSk7XG4gIH1cbiAgMTIuMTElIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDIzLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1LjUzLCAwLCAwLCAxKTtcbiAgfVxuICAxNS4wNyUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMC45NDcsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEyLjY2MiwgMCwgMCwgMSk7XG4gIH1cbiAgMTYuMTIlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDAuOTUxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxMy4wMDcsIDAsIDAsIDEpO1xuICB9XG4gIDI3LjIzJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjAwMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMi4zNTIsIDAsIDAsIDEpO1xuICB9XG4gIDI3LjU4JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjAwMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMi4xMjEsIDAsIDAsIDEpO1xuICB9XG4gIDM4LjM0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4zMTEsIDAsIDAsIDEpO1xuICB9XG4gIDQwLjA5JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4yOTEsIDAsIDAsIDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4wNDgsIDAsIDAsIDEpO1xuICB9XG4gIDYwLjU2JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLjAwNywgMCwgMCwgMSk7XG4gIH1cbiAgODIuNzglIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbn1cblxuYXNpZGU6aG92ZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBhbmltYXRpb246IHNvY2lhbF9hbmltYXRpb24gMjAwMG1zIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbi1kZWxheTogMC43NXM7XG59XG5cbmFzaWRlOmhvdmVyIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbjogc29jaWFsX2FuaW1hdGlvbiAyMDAwbXMgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuYXNpZGU6aG92ZXIgdWwgbGk6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uOiBzb2NpYWxfYW5pbWF0aW9uIDIwMDBtcyBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMjVzO1xufVxuXG5Aa2V5ZnJhbWVzIHNvY2lhbF9hbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMzAwLCAwLCAwLCAxKTtcbiAgfVxuICAxLjMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDMuOTA1LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMjM3LjAyLCAwLCAwLCAxKTtcbiAgfVxuICAyLjU1JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCg0LjU1NCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTE4Mi43OTgsIDAsIDAsIDEpO1xuICB9XG4gIDQuMSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoNC4wMjUsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0xMjUuOTEyLCAwLCAwLCAxKTtcbiAgfVxuICA1LjcxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgzLjAzOSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTc5LjU5NiwgMCwgMCwgMSk7XG4gIH1cbiAgOC4xMSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS44MiwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTMxLjY0NywgMCwgMCwgMSk7XG4gIH1cbiAgOC44MSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS41ODEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0yMS44NCwgMCwgMCwgMSk7XG4gIH1cbiAgMTEuOTYlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDM0LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0LjgyNSwgMCwgMCwgMSk7XG4gIH1cbiAgMTIuMTElIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDIzLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA1LjUzLCAwLCAwLCAxKTtcbiAgfVxuICAxNS4wNyUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMC45NDcsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEyLjY2MiwgMCwgMCwgMSk7XG4gIH1cbiAgMTYuMTIlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDAuOTUxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxMy4wMDcsIDAsIDAsIDEpO1xuICB9XG4gIDI3LjIzJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjAwMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMi4zNTIsIDAsIDAsIDEpO1xuICB9XG4gIDI3LjU4JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjAwMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMi4xMjEsIDAsIDAsIDEpO1xuICB9XG4gIDM4LjM0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4zMTEsIDAsIDAsIDEpO1xuICB9XG4gIDQwLjA5JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4yOTEsIDAsIDAsIDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMC4wNDgsIDAsIDAsIDEpO1xuICB9XG4gIDYwLjU2JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLjAwNywgMCwgMCwgMSk7XG4gIH1cbiAgODIuNzglIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbn1cbiIsImhlYWRlciBpbWcge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuYXNpZGUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC8zYS8xZi8wMi8zYTFmMDJjMTA3MDBkYWE4MDY1NWEzMDJjNWEyN2FjZi5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAgMTAwcHggMTBweCAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xufVxuXG5hc2lkZSBoZWFkZXIgaW1nIHtcbiAgYW5pbWF0aW9uOiBwcm9maWxlX2ltYWdlIDIwMDBtcyBsaW5lYXIgYm90aDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhlYWRlciBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMjVzO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbmFzaWRlOmhvdmVyIGhlYWRlciBoMSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgb3V0bGluZTogMCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbmhlYWRlciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9maWxlLWJpbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDFweCAyMHB4IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDEuNXM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgNDklLCByZ2JhKDAsIDAsIDAsIDAuNjEpIDEwMCUpO1xufVxuXG5hc2lkZTpob3ZlciAucHJvZmlsZS1iaW8ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucHJvZmlsZS1iaW8gcDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucHJvZmlsZS1zb2NpYWwtbGlua3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC00NDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xufVxuXG5hc2lkZTpob3ZlciAucHJvZmlsZS1zb2NpYWwtbGlua3Mge1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wcm9maWxlLXNvY2lhbC1saW5rcyBsaSBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qUFJPRklMRSBJTUFHRSBBTklNQVRFICovXG5Aa2V5ZnJhbWVzIHByb2ZpbGVfaW1hZ2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICAzLjQlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDMyLCAwLCAwLCAwLCAwLCAxLjA0MSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgNC43JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA0NSwgMCwgMCwgMCwgMCwgMS4wNiwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgNi44MSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4wNjYsIDAsIDAsIDAsIDAsIDEuMDg5LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICA5LjQxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA4OCwgMCwgMCwgMCwgMCwgMS4xMTcsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEwLjIxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NCwgMCwgMCwgMCwgMCwgMS4xMjMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEzLjYxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjExMiwgMCwgMCwgMCwgMCwgMS4xMzMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDE0LjExJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjExNCwgMCwgMCwgMCwgMCwgMS4xMzMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDE3LjUyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEyMSwgMCwgMCwgMCwgMCwgMS4xMjQsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDE4LjcyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEyMSwgMCwgMCwgMCwgMCwgMS4xMTksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDIxLjMyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEyLCAwLCAwLCAwLCAwLCAxLjEwNywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgMjQuMzIlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMTE1LCAwLCAwLCAwLCAwLCAxLjA5NiwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgMjUuMjMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMTEzLCAwLCAwLCAwLCAwLCAxLjA5NCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgMjkuMDMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMTA2LCAwLCAwLCAwLCAwLCAxLjA5LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICAyOS45MyUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4xMDUsIDAsIDAsIDAsIDAsIDEuMDksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDM1LjU0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5OCwgMCwgMCwgMCwgMCwgMS4wOTYsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDM2Ljc0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NywgMCwgMCwgMCwgMCwgMS4wOTgsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDQxLjA0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NiwgMCwgMCwgMCwgMCwgMS4xMDIsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDQ0LjQ0JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5NywgMCwgMCwgMCwgMCwgMS4xMDMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDUyLjE1JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjA5OSwgMCwgMCwgMCwgMCwgMS4xMDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDU5Ljg2JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEwMSwgMCwgMCwgMCwgMCwgMS4wOTksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDYzLjI2JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEwMSwgMCwgMCwgMCwgMCwgMS4wOTksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDc1LjI4JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjEsIDAsIDAsIDAsIDAsIDEuMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgODUuNDklIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMSwgMCwgMCwgMCwgMCwgMS4xLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICA5MC42OSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4xLCAwLCAwLCAwLCAwLCAxLjEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4xLCAwLCAwLCAwLCAwLCAxLjEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG59XG4vKk5BTUUgQU5JTUFURSAqL1xuYXNpZGU6aG92ZXIgaGVhZGVyIGgxIHtcbiAgYW5pbWF0aW9uOiBuYW1lX2FuZF9qb2IgMTUwMG1zIGxpbmVhciBib3RoO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbkBrZXlmcmFtZXMgbmFtZV9hbmRfam9iIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTMwMCwgMCwgMCwgMSk7XG4gIH1cbiAgMS4zJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgzLjkwNSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTIzNy4wMiwgMCwgMCwgMSk7XG4gIH1cbiAgMi41NSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoNC41NTQsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0xODIuNzk4LCAwLCAwLCAxKTtcbiAgfVxuICA0LjElIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDQuMDI1LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMTI1LjkxMiwgMCwgMCwgMSk7XG4gIH1cbiAgNS43MSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMy4wMzksIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC03OS41OTYsIDAsIDAsIDEpO1xuICB9XG4gIDguMTElIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuODIsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0zMS42NDcsIDAsIDAsIDEpO1xuICB9XG4gIDguODElIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuNTgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMjEuODQsIDAsIDAsIDEpO1xuICB9XG4gIDExLjk2JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjAzNCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNC44MjUsIDAsIDAsIDEpO1xuICB9XG4gIDEyLjExJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjAyMywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNS41MywgMCwgMCwgMSk7XG4gIH1cbiAgMTUuMDclIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDAuOTQ3LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxMi42NjIsIDAsIDAsIDEpO1xuICB9XG4gIDE2LjEyJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgwLjk1MSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMTMuMDA3LCAwLCAwLCAxKTtcbiAgfVxuICAyNy4yMyUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4wMDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDIuMzUyLCAwLCAwLCAxKTtcbiAgfVxuICAyNy41OCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4wMDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDIuMTIxLCAwLCAwLCAxKTtcbiAgfVxuICAzOC4zNCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMzExLCAwLCAwLCAxKTtcbiAgfVxuICA0MC4wOSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMjkxLCAwLCAwLCAxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTAuMDQ4LCAwLCAwLCAxKTtcbiAgfVxuICA2MC41NiUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMC4wMDcsIDAsIDAsIDEpO1xuICB9XG4gIDgyLjc4JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEpO1xuICB9XG59XG5hc2lkZTpob3ZlciB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIGFuaW1hdGlvbjogc29jaWFsX2FuaW1hdGlvbiAyMDAwbXMgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cblxuYXNpZGU6aG92ZXIgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uOiBzb2NpYWxfYW5pbWF0aW9uIDIwMDBtcyBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG5hc2lkZTpob3ZlciB1bCBsaTpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb246IHNvY2lhbF9hbmltYXRpb24gMjAwMG1zIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXM7XG59XG5cbkBrZXlmcmFtZXMgc29jaWFsX2FuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0zMDAsIDAsIDAsIDEpO1xuICB9XG4gIDEuMyUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMy45MDUsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0yMzcuMDIsIDAsIDAsIDEpO1xuICB9XG4gIDIuNTUlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDQuNTU0LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMTgyLjc5OCwgMCwgMCwgMSk7XG4gIH1cbiAgNC4xJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCg0LjAyNSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTEyNS45MTIsIDAsIDAsIDEpO1xuICB9XG4gIDUuNzElIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDMuMDM5LCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtNzkuNTk2LCAwLCAwLCAxKTtcbiAgfVxuICA4LjExJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjgyLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAtMzEuNjQ3LCAwLCAwLCAxKTtcbiAgfVxuICA4LjgxJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLjU4MSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgLTIxLjg0LCAwLCAwLCAxKTtcbiAgfVxuICAxMS45NiUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4wMzQsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDQuODI1LCAwLCAwLCAxKTtcbiAgfVxuICAxMi4xMSUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMS4wMjMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDUuNTMsIDAsIDAsIDEpO1xuICB9XG4gIDE1LjA3JSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgwLjk0NywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMTIuNjYyLCAwLCAwLCAxKTtcbiAgfVxuICAxNi4xMiUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMC45NTEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEzLjAwNywgMCwgMCwgMSk7XG4gIH1cbiAgMjcuMjMlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAyLjM1MiwgMCwgMCwgMSk7XG4gIH1cbiAgMjcuNTglIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEuMDAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAyLjEyMSwgMCwgMCwgMSk7XG4gIH1cbiAgMzguMzQlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0wLjMxMSwgMCwgMCwgMSk7XG4gIH1cbiAgNDAuMDklIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0wLjI5MSwgMCwgMCwgMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIC0wLjA0OCwgMCwgMCwgMSk7XG4gIH1cbiAgNjAuNTYlIHtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAuMDA3LCAwLCAwLCAxKTtcbiAgfVxuICA4Mi43OCUge1xuICAgIHRyYW5zZm9ybTogbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngcommunity-sidenav',
          templateUrl: './sidenav.component.html',
          styleUrls: ['./sidenav.component.scss']
        }]
      }], function () {
        return [];
      }, {
        community: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/main/main.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/main/main.component.ts ***!
    \**********************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppPagesMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_community_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/services/community.service */
    "./src/app/shared/services/community.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/pages/main/components/map/map.component.ts");
    /* harmony import */


    var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sidenav/sidenav.component */
    "./src/app/pages/main/components/sidenav/sidenav.component.ts");

    function MainComponent_ngcommunity_map_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngcommunity-map", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("community", function MainComponent_ngcommunity_map_2_Template_ngcommunity_map_community_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onSelectCommunity($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var communities_r2 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("communities", communities_r2);
      }
    }

    function MainComponent_mat_grid_tile_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngcommunity-sidenav", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("colspan", ctx_r1.optionsGrid.sidenav.colspan);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("community", ctx_r1.community);
      }
    }

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(communityService) {
        _classCallCheck(this, MainComponent);

        this.communityService = communityService;
        this.communities$ = this.communityService.communities;
        this.optionsGrid = {
          cols: 4,
          map: {
            colspan: 4
          },
          sidenav: {
            colspan: 0
          }
        };
        this.communities$ = this.communityService.communities;
      }

      _createClass(MainComponent, [{
        key: "onSelectCommunity",
        value: function onSelectCommunity(community) {
          this.community = community;
          this.optionsGrid.map.colspan = 3;
          this.optionsGrid.sidenav.colspan = 1;
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_community_service__WEBPACK_IMPORTED_MODULE_1__["CommunityService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["ngcommunity-main"]],
      decls: 5,
      vars: 5,
      consts: [["cols", "4", "rowHeight", "100%"], [3, "colspan"], [3, "communities", "community", 4, "ngIf"], [3, "colspan", 4, "ngIf"], [3, "communities", "community"], [3, "community"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_ngcommunity_map_2_Template, 1, 1, "ngcommunity-map", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainComponent_mat_grid_tile_4_Template, 2, 2, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("colspan", ctx.optionsGrid.map.colspan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.communities$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.community);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["ngcommunity-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nngcommunity-sidenav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItY29tbXVuaXRpZXMvYW5ndWxhci1jb21tdW5pdGllcy9zcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2NvbW11bml0eS1tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5uZ2NvbW11bml0eS1zaWRlbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuIiwibmdjb21tdW5pdHktbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubmdjb21tdW5pdHktc2lkZW5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngcommunity-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_community_service__WEBPACK_IMPORTED_MODULE_1__["CommunityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/main/main.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/main/main.module.ts ***!
    \*******************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppPagesMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/pages/main/main.component.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/pages/main/components/map/map.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sidenav/sidenav.component */
    "./src/app/pages/main/components/sidenav/sidenav.component.ts");

    var components = [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"]];

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MainModule
    });
    MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MainModule_Factory(t) {
        return new (t || MainModule)();
      },
      providers: [],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainModule, {
        declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsModule"]],
        exports: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [].concat(components, [_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"]]),
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsModule"]],
          providers: [],
          exports: [].concat(components)
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _main_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/main.module */
    "./src/app/pages/main/main.module.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      providers: [],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"]], _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"]],
        exports: [_main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"]],
          providers: [],
          exports: [_main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["ngcommunity-footer"]],
      decls: 5,
      vars: 0,
      consts: [["color", "light", 1, "footer"], [1, "text-right"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ANGULAR COMMUNITIES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"]],
      styles: ["footer[_ngcontent-%COMP%] {\n  background-color: \"#999999\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItY29tbXVuaXRpZXMvYW5ndWxhci1jb21tdW5pdGllcy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IFwiIzk5OTk5OVwiO1xufVxuIiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogXCIjOTk5OTk5XCI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngcommunity-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["ngcommunity-header"]],
      decls: 9,
      vars: 0,
      consts: [["color", "accent", 1, "main-header"], [1, "main-header-container"], ["mat-icon-button", "", 1, "burger-menu"], [1, "menu-spacer"], [1, "fill-space"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ANGULAR COMMUNITIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngcommunity-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/community.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/community.service.ts ***!
    \******************************************************/

  /*! exports provided: CommunityService */

  /***/
  function srcAppSharedServicesCommunityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityService", function () {
      return CommunityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CommunityService = /*#__PURE__*/function () {
      function CommunityService(httpClient) {
        _classCallCheck(this, CommunityService);

        this.httpClient = httpClient;
        this.JSON_COMMUNITIES = 'assets/json/communities.json';
      }

      _createClass(CommunityService, [{
        key: "communities",
        get: function get() {
          return this.httpClient.get(this.JSON_COMMUNITIES);
        }
      }]);

      return CommunityService;
    }();

    CommunityService.ɵfac = function CommunityService_Factory(t) {
      return new (t || CommunityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CommunityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommunityService,
      factory: CommunityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var components = [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]];
    var MaterialModules = [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [],
      imports: [[].concat(MaterialModules, [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]), _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
        imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"],
        args: [{
          declarations: [].concat(components),
          imports: [].concat(MaterialModules, [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]),
          providers: [],
          exports: [].concat(components, MaterialModules, [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]])
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/angular-communities/angular-communities/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map