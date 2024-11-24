import { Component } from '@angular/core';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, quantity: 1, imageUrl: 'assets/images/Product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, quantity: 1, imageUrl: 'assets/product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, quantity: 1, imageUrl: 'assets/product3.jpg' },
    { id: 4, name: 'Product 4', price: 40, quantity: 1, imageUrl: 'assets/product4.jpg' },
    { id: 5, name: 'Product 5', price: 50, quantity: 1, imageUrl: 'assets/product5.jpg' },
    { id: 6, name: 'Product 6', price: 60, quantity: 1, imageUrl: 'assets/product6.jpg' },
    { id: 7, name: 'Product 7', price: 70, quantity: 1, imageUrl: 'assets/product7.jpg' },
    { id: 8, name: 'Product 8', price: 80, quantity: 1, imageUrl: 'assets/product8.jpg' },
    { id: 9, name: 'Product 9', price: 90, quantity: 1, imageUrl: 'assets/product9.jpg' },
    { id: 10, name: 'Product 10', price: 100, quantity: 1, imageUrl: 'assets/product10.jpg' }
  ];

  
  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
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
