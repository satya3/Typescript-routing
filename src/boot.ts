
import {Component,bind} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';

import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';

import {SharedService} from 'src/sharedService';
import {ProductList} from 'src/tsproductlist';
import {ProductCart} from 'src/tsproductcart';
import {OrderInfo} from 'src/tsOrderInfo.ts';


@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>
      
    </h1> 
    
    <router-outlet></router-outlet>
      `,
 
})

@RouteConfig([
  {path:'/product-list', name: 'ProductList', component: ProductList}
  {path:'/product-cart', name: 'ProductCart', component: ProductCart}
  {path:'/order', name: 'OrderInfo', component: OrderInfo}
])

export class AppComponent implements OnInit {
  
  constructor(router:Router)
  {
    this.router=router;
  }
  
    ngOnInit() {
    console.log('ngOnInit'); 
    this.router.navigate(['/ProductList']);
  }
  
  
  
}
   
    bootstrap(AppComponent, [SharedService,
    ROUTER_PROVIDERS,bind(APP_BASE_HREF).toValue(location.pathname)
    ]);