import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-payment',
  standalone: false,
  
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

  cart: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Get cart from localStorage or service
    const cart = localStorage.getItem('cart');
    this.cart = cart ? JSON.parse(cart) : [];
}
// Simulate a payment process
processPayment(): void {
  alert('Payment Processed Successfully!');
  // You can clear the cart or handle the payment confirmation here
  localStorage.removeItem('cart');  // Clear the cart after successful payment
}
}
