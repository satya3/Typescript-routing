var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ProductCart = (function () {
    function ProductCart(router, service) {
        var _this = this;
        this.getOrderValue = function () {
            totalValue = 0;
            for (var i = 0; i < _this.CartItems.length; i++) {
                totalValue += _this.CartItems[i].quantity * _this.CartItems[i].price;
            }
            return totalValue;
        };
        this.getCartItems = function () {
            totalItems = 0;
            for (var i = 0; i < _this.CartItems.length; i++) {
                totalItems += _this.CartItems[i].quantity;
            }
            return totalItems;
        };
        this.router = router;
        this.service = service;
        this.CartItems = this.service.CartItems;
        this.orderValue = service.getOrderValue();
    }
    ProductCart.prototype.back = function () {
        console.log('Back called');
        this.service.checkoutProduct(this.CartItems);
        this.router.navigate(['/ProductList']);
    };
    ProductCart.prototype.showConfirmOrder = function () {
        console.log('order called');
        this.service.checkoutProduct(this.CartItems);
        this.router.navigate(['/OrderInfo']);
    };
    ProductCart.prototype.RemoveCart = function (item) {
        console.log(item);
        var index = this.CartItems.indexOf(item);
        console.log('index:' + index);
        if (index === -1) {
            return;
        }
        this.CartItems.splice(index, 1);
        if (this.CartItems.length == 0) {
            this.back();
        }
    };
    ProductCart.prototype.clearCart = function () {
        if (confirm('Do you want to clear Cart?')) {
            this.CartItems = [];
            this.back();
        }
    };
    ProductCart = __decorate([
        core_1.Component({
            //selector: 'f',
            templateUrl: '../src/app/productCheckout.html'
        })
    ], ProductCart);
    return ProductCart;
})();
exports.ProductCart = ProductCart;
//# sourceMappingURL=tsproductcart.js.map