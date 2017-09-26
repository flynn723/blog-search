import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform( value: any, search: string): any {

    if( value ) {
      if ( search === "" ) {
        return null;
      }
      // if( search === "" || value.length < 1 )  {        
      //   return value;
      // }
      const resultArray = [];
      for(const item of value)  {
        if ( search.toUpperCase() === item.title.substring( 0, search.length ).toUpperCase() ) {
          resultArray.push(item)
        }
      }
      // console.log(resultArray);
      return resultArray;
    }

  }

}
