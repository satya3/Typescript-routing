import {Component,View,bind} from 'angular2/core';
import {SharedService} from 'src/sharedService';
import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';

@Component({
  //selector: 'f',
  templateUrl: 'src/app/productCheckout.html',
 
})

export class ProductCart   {
  
  constructor(router:Router,service:SharedService)
  {
    this.router=router;
    this.service=service;
    this.CartItems=this.service.CartItems;
    this.orderValue=service.getOrderValue();
  }
  
 back()
  {
    console.log('Back called');
    this.service.checkoutProduct(this.CartItems);
    this.router.navigate(['/ProductList']);
  }

   showConfirmOrder()
  {
    console.log('order called');
    this.service.checkoutProduct(this.CartItems);
    this.router.navigate(['/OrderInfo']);
  }


  RemoveCart(item:information) {
    console.log(item);
    var index = this.CartItems.indexOf(item);
    console.log('index:' + index);
      if (index === -1) {

      return;
    }
    this.CartItems.splice(index,1);
    if (this.CartItems.length ==0)
    {
     this.back();
    }
   
  }

  clearCart(){
    if (confirm('Do you want to clear Cart?')) { 
      this.CartItems = [];
      this.back();
    }

  }

  getOrderValue:number()
  {

    totalValue=0;
    for (var i = 0; i < this.CartItems.length; i++) {
       totalValue +=  this.CartItems[i].quantity  * this.CartItems[i].price;
    }
    return totalValue;
  }
  
  getCartItems:number()
  {

    totalItems=0;
    for (var i = 0; i < this.CartItems.length; i++) {
       totalItems +=  this.CartItems[i].quantity ;
    }
    return totalItems;
  }

}