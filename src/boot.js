var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var sharedService_1 = require('src/sharedService');
var tsproductlist_1 = require('src/tsproductlist');
var tsproductcart_1 = require('src/tsproductcart');
var tsOrderInfo_ts_1 = require('src/tsOrderInfo.ts');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.router.navigate(['/ProductList']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <h1>\n      \n    </h1> \n    \n    <router-outlet></router-outlet>\n      "
        }),
        router_1.RouteConfig([
            { path: '/product-list', name: 'ProductList', component: tsproductlist_1.ProductList },
            { path: '/product-cart', name: 'ProductCart', component: tsproductcart_1.ProductCart },
            { path: '/order', name: 'OrderInfo', component: tsOrderInfo_ts_1.OrderInfo }
        ])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent, [sharedService_1.SharedService,
    router_1.ROUTER_PROVIDERS, core_1.bind(router_1.APP_BASE_HREF).toValue(location.pathname)
]);
//# sourceMappingURL=boot.js.map