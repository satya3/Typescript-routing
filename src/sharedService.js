var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
/*
// Name Service
export interface myData {
   name:string;
}
*/
var ContactInfo = (function () {
    function ContactInfo(code, name, description, price) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    return ContactInfo;
})();
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
var SharedService = (function () {
    function SharedService() {
        var _this = this;
        this.information = [];
        this.CartItems = [];
        this.orderNo = 201603001;
        this.getOrderNo = function () {
            console.log('get order no');
            _this.orderNo += 1;
            return _this.orderNo;
        };
        this.getOrderValue = function () {
            totalValue = 0;
            for (var i = 0; i < _this.CartItems.length; i++) {
                totalValue += _this.CartItems[i].quantity * _this.CartItems[i].price;
            }
            return totalValue;
        };
        var prodList = [];
        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: 'http://beta.json-generator.com/api/json/get/N1c8pWX1Z',
            data: {},
            async: false,
            success: function (data) {
                for (i = 0; i < data.length; i++) {
                    var additem = data[i];
                    prodList.push(new ContactInfoCart(additem.code, additem.name, additem.description, additem.price));
                }
            },
            error: function (data) {
                successmessage = 'Error';
            }
        });
        this.information = prodList;
    }
    SharedService.prototype.addCart = function (newitem, quantity) {
        this.CartItems.push(new ContactInfo(newitem.code, newitem.name, newitem.description, newitem.price, quantity));
    };
    SharedService.prototype.checkoutProduct = function (cartlist) {
        this.CartItems = cartlist;
    };
    SharedService = __decorate([
        core_1.Injectable()
    ], SharedService);
    return SharedService;
})();
exports.SharedService = SharedService;
//# sourceMappingURL=sharedService.js.map