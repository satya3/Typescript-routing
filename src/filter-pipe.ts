import {Injectable, Pipe} from 'angular2/core';

@Pipe({
    name: 'myfilter'
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
    
    transform(value: any, args: string[]): any {
      let filter = args[0].toLocaleLowerCase();
       return filter ? value.filter(productlist=> productlist.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
   }

}