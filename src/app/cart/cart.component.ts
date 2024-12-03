import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../cart.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    AOS.init();  // Initialize AOS animations
    this.cart = this.cartService.getCart();
  }
  

  // Optional: Add a method to remove items from the cart
  removeFromCart(product: Product): void {
    let cart = this.cartService.getCart();
    cart = cart.filter(item => item.id !== product.id);
    this.cartService.saveCart(cart);
    this.cart = cart;  // Update the local cart state
  }
  buyNow(): void {
    // Get all cart items and save to localStorage or pass in query params
    const cart = this.cartService.getCart();
    
    // Store the cart items in localStorage or pass via URL
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to payment gateway (you can replace this URL with a real payment gateway)
    window.location.href = 'https://example-payment-gateway.com';
  }
}
