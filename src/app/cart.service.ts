import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string; // Ensure imageUrl is included
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'cart';  // Key to store cart in localStorage

  constructor() { }
  getCart(): Product[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }
  // Save cart to localStorage
  saveCart(cart: Product[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  // Add a product to the cart
  addToCart(product: Product): void {
    let cart = this.getCart();
    const productIndex = cart.findIndex(p => p.id === product.id);

    if (productIndex !== -1) {
      // If product is already in cart, increase quantity
      cart[productIndex].quantity += product.quantity;
    } else {
      // If product is not in cart, add it
      cart.push(product);
    }

    this.saveCart(cart);  // Save updated cart to localStorage
  }
  removeFromCart(product: Product): void {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== product.id);
    this.saveCart(cart);
  }

}
