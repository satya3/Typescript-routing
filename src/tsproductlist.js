var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var filter_pipe_1 = require('src/filter-pipe');
var ContactInfoCart = (function () {
    function ContactInfoCart(code, name, description, price, quantity) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    return ContactInfoCart;
})();
var ProductList = (function () {
    function ProductList(service, router) {
        this.filterList = { name: 'A' };
        //productlist=true;
        //confirmOrder=true;
        //checkout=true;
        this.filterList = { name: '' };
        this.CartItems = [];
        this.service = service;
        this.router = router;
        this.CartItems = [];
        this.CustomerList = [];
        this.productlist = [];
        if (service.information.length > 0) {
            this.productlist = service.information;
        }
        if (service.CartItems.length > 0) {
            this.CartItems = service.CartItems;
        }
    }
    ProductList.prototype.addCart = function (additem, quantity) {
        var found = false;
        $('#divProductListTop').show();
        $('#divProductListBottom').show();
        for (var i = 0; i < this.CartItems.length && !found; i++) {
            var item = this.CartItems[i];
            if (item.code == additem.code) {
                this.CartItems[i].quantity = this.CartItems[i].quantity + 1;
                found = true;
                return;
            }
        }
        if (!found) {
            this.CartItems.push(new ContactInfoCart(additem.code, additem.name, additem.description, additem.price, quantity));
        }
    };
    ProductList.prototype.checkOut = function () {
        this.service.checkoutProduct(this.CartItems);
        this.router.navigate(['/ProductCart']);
    };
    ProductList = __decorate([
        core_1.Component({
            //selector: 'f',
            templateUrl: 'src/app/productList.html',
            pipes: [filter_pipe_1.MyFilterPipe]
        })
    ], ProductList);
    return ProductList;
})();
exports.ProductList = ProductList;
//# sourceMappingURL=tsproductlist.js.map