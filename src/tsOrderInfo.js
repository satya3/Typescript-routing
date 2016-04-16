var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var OrderInfo = (function () {
    function OrderInfo(router, service) {
        this.router = router;
        this.service = service;
        console.log('cone called');
        this.orderNo = service.getOrderNo();
        this.orderValue = service.getOrderValue();
    }
    OrderInfo.prototype.back = function () {
        console.log('Back called');
        //this.CartItems = [];
        this.service.checkoutProduct([]);
        this.router.navigate(['/ProductList']);
    };
    OrderInfo = __decorate([
        core_1.Component({
            //selector: 'f',
            templateUrl: '../src/app/OrderInfo.html'
        })
    ], OrderInfo);
    return OrderInfo;
})();
exports.OrderInfo = OrderInfo;
//# sourceMappingURL=tsOrderInfo.js.map