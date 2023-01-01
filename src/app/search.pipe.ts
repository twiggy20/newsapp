import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(headlines: any[], filterText:string ) {
    if (headlines.length==0|| filterText=='') {
      return headlines;
      
   }
   return headlines.filter(headline=>
    headline.title.toLowerCase().indexOf(filterText.toLowerCase())!==-1);
  }

}
