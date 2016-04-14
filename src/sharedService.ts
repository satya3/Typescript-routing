import {Http} from 'angular2/http';
import {Component, Injectable,Input,Output,EventEmitter} from 'angular2/core'

/*
// Name Service
export interface myData {
   name:string;
}
*/


class ContactInfo {
constructor(
    public code:string,
    public name:string,
    public description:string,
    public price:number
    
    ) { }
}

class ContactInfoCart {
constructor(
    public code:string,
    public name:string,
    public description:string,
    public price:number,
    public quantity: number
    
    ) { }
}


@Injectable()
export class SharedService {
  information: ContactInfo =[];
  CartItems: ContactInfoCart =[];
  constructor()
  {
      var prodList = [];
      jQuery.ajax({            
            type:"post",
            dataType:"json",
            url: 'http://beta.json-generator.com/api/json/get/N1c8pWX1Z',
            data: {},
            async: false,
            success: function(data) {                
                for (i=0; i< data.length; i++)
                {
                 var additem = data[i];
                    prodList.push(new ContactInfoCart(additem.code,additem.name,additem.description,additem.price));
                }
            },
            error: function(data) {
                successmessage = 'Error';
            },
        });
        this.information= prodList;
  }

  
  addCart(newitem,quantity){
        this.CartItems.push(new ContactInfo(newitem.code,newitem.name,newitem.description,newitem.price,quantity));
    
  }

  checkoutProduct(cartlist){
        this.CartItems =cartlist;
  }
  

  orderNo: 201603001;

  getOrderNo:string()
  {
    console.log('get order no');
    this.orderNo +=1;
    return this.orderNo;
  }

   getOrderValue:number()
  {

    totalValue=0;
    for (var i = 0; i < this.CartItems.length; i++) {
       totalValue +=  this.CartItems[i].quantity  * this.CartItems[i].price;
    }
    return totalValue;
  }
  
  //information = [];

} 
