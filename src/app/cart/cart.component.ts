import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../cart.service';

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
    this.cart = this.cartService.getCart();
  }

  // Optional: Add a method to remove items from the cart
  removeFromCart(product: Product): void {
    let cart = this.cartService.getCart();
    cart = cart.filter(item => item.id !== product.id);
    this.cartService.saveCart(cart);
    this.cart = cart;  // Update the local cart state
  }
}
