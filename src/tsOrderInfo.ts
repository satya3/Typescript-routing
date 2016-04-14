import {Component,View,bind} from 'angular2/core';
import {SharedService} from 'src/sharedService';
import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';

@Component({
  //selector: 'f',
  templateUrl: 'src/app/OrderInfo.html',
 
})

export class OrderInfo   {
  
  constructor(router:Router,service:SharedService)
  {
    this.router=router;
    this.service=service;
    console.log('cone called');
    this.orderNo=service.getOrderNo();
    this.orderValue=service.getOrderValue();
  }
  
 back()
  {
    console.log('Back called');
    //this.CartItems = [];
    this.service.checkoutProduct([]]);
    this.router.navigate(['/ProductList']);
  }
}