import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'off',
  standalone: false
})
export class OffPipe implements PipeTransform {

  transform(price: number,offer:number): number {
    if (!price || !offer) {
      return price;  // If no price or offer, return original price
    }
    // Apply the offer (discount)
    return price - (price*offer)/100;
  }
  

}
