import { Component } from '@angular/core';
import { CartService } from '../cart.service';

export interface Home {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;  // Add an imageUrl property to hold the image path
  offer:number;
}
@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Home[] = [
    { id: 1, name: 'Organic Alovera Gel with Turmiric Extract', price: 199, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/AT1_2.png',offer:20},
    { id: 2, name: 'Sunscreen-Oily Skin SPF 60 100gm', price: 200, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/1-9at.jpg',offer:30 },
    { id: 3, name: 'Himalaya Triphala Tablets', price: 310, quantity: 1, imageUrl: 'https://images.apollo247.in/pub/media/catalog/product/H/I/HIM0151_1-JULY23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',offer:20 },
    { id: 4, name: 'Anti-Skin Tan Remover', price: 240, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/Anti-tan-scrub_6.jpg',offer:10},
    { id: 5, name: 'Himalya Bhami for Mind Wellness', price: 50, quantity: 1, imageUrl: 'https://images.apollo247.in/pub/media/catalog/product/b/r/bra0023_1-jan24_1_.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',offer:20 },
    { id: 6, name: 'OH Coconut Oil Comb Applicator', price: 600, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/1-25CCOC.jpg',offer:20 },
   
  ];

  
  constructor(private cartService: CartService) {}

  addToCart(product: Home): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
   // Redirect the user to the payment gateway (simulated)
   buyNow(): void {
    // Get all cart items and save to localStorage or pass in query params
    const cart = this.cartService.getCart();
    
    // Store the cart items in localStorage or pass via URL
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to payment gateway (you can replace this URL with a real payment gateway)
    window.location.href = 'https://example-payment-gateway.com';
  }

}
