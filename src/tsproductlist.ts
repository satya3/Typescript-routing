import {Component,View,bind} from 'angular2/core';
import {SharedService} from 'src/sharedService';
import {Router,ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';
import { MyFilterPipe } from 'src/filter-pipe';


class ContactInfoCart {
constructor(
    public code:string,
    public name:string,
    public description:string,
    public price:number,
    public quantity: number
    
    ) { }
}


@Component({
  //selector: 'f',
  templateUrl: 'src/app/productList.html',
  pipes: [ MyFilterPipe ],
})

export class ProductList   {
  filterList = {name: 'A'};
  constructor(service:SharedService,router:Router){
    this.service=service;
    this.router=router;
    this.CartItems = [];
    this.CustomerList = [];
    this.productlist =[];
    
    if (service.information.length >0){
      this.productlist  = service.information;
    }

    if (service.CartItems.length >0){
      this.CartItems  = service.CartItems;
    }
  }
  
  //productlist=true;
  //confirmOrder=true;
  //checkout=true;
  filterList = {name: ''}; 
  CartItems = [];
  
  addCart(additem:information,quantity: number) {
    var found = false;
    $('#divProductListTop').show()
    $('#divProductListBottom').show()
    for (var i = 0; i < this.CartItems.length && !found; i++) {
        var item = this.CartItems[i];
        if(item.code == additem.code)
        {
          this.CartItems[i].quantity  = this.CartItems[i].quantity + 1;
          found =true;
          return;
        }
    }

   if (!found) {
    this.CartItems.push(new ContactInfoCart(additem.code,additem.name,additem.description,additem.price,quantity));
    }
}
checkOut(){
    this.service.checkoutProduct(this.CartItems);
    this.router.navigate(['/ProductCart']);
  }

  
}