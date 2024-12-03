import { Component } from '@angular/core';
import { CartService } from '../cart.service';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;  // Add an imageUrl property to hold the image path
  offer:number;
  Category:string;
}
@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: Product[] = [
    { id: 1, name: 'Organic Alovera Gel with Turmiric Extract', price: 199, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/AT1_2.png',offer:20,Category:'skin'},
    { id: 2, name: 'Sunscreen-Oily Skin SPF 60 100gm', price: 200, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/1-9at.jpg',offer:30,Category:'skin' },
    { id: 3, name: 'Himalaya Triphala Tablets', price: 310, quantity: 1, imageUrl: 'https://images.apollo247.in/pub/media/catalog/product/H/I/HIM0151_1-JULY23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',offer:20,Category:'body' },
    { id: 4, name: 'Anti-Skin Tan Remover', price: 240, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/Anti-tan-scrub_6.jpg',offer:10,Category:'body'},
    { id: 5, name: 'Himalya Bhami for Mind Wellness', price: 50, quantity: 1, imageUrl: 'https://images.apollo247.in/pub/media/catalog/product/b/r/bra0023_1-jan24_1_.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',offer:20,Category:'hair' },
    { id: 6, name: 'OH Coconut Oil Comb Applicator', price: 600, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/1-25CCOC.jpg',offer:20 ,Category:'immunity'},
    { id: 7, name: 'Organic Youthful Glow Face Serum', price: 370, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/1-23dr_2.jpg',offer:40,Category:'skin' },
    { id: 8, name: 'Youthful Glow Face Cleanser: Saffron, Oat Milk & Peach - 100ml', price: 230, quantity: 1, imageUrl: 'https://files.organicharvest.in/site-images/800x800/8906080039171-Organic-Face-Cleanser-Vitamin-A---100ml-5.jpg',offer:10,Category:'digestion'},
    { id: 9, name: 'Naveda Join Support & Calcium Complex Combo', price: 190, quantity: 1, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSfRNlu2mo3-anafImj-TBqs3AOrZGzHKQ76XZRJoNMX9yUt_jKfktIgIXVKCis8MoEmRRujBdgDI3n-7J61z_HLIuaXuDDWYo6CqDonlNTkyDYA7bHtncU&usqp=CAE',offer:25,Category:'skin'},
    { id: 10, name: 'Product 10', price: 500, quantity: 1, imageUrl: 'assets/product10.jpg',offer:50,Category:'skin'}
  ];
  searchTerm: string = '';
  selectedCategory: string = '';

  // Filtered items to display
  filteredItems: Array<any> = [];
  

  ngOnInit() {
    // Initialize filtered items with all items at the start
    this.filteredItems = [...this.products];
  }

  // Method to filter items based on selected category
  filterResults() {
    // If a category is selected, filter by category
    if (this.selectedCategory) {
      this.filteredItems = this.products.filter(item => item.Category === this.selectedCategory);
    } 
    else if (this.searchTerm){
      this.filteredItems = this.filteredItems.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    else {
      // If no category is selected, reset the filtered items
      this.filteredItems = [];
    }
  }
 

  
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
    window.location.href = 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjEpsevovWJAxX80hYFHV5nDZoYABACGgJ0bA&co=1&ase=2&gclid=Cj0KCQiAuou6BhDhARIsAIfgrn61q6F4-PF6yhoiNzFRyaoQMYurc_fV4JC8VD_qLLVMaoYQ_VxEaDYaAhDlEALw_wcB&ei=GkRDZ5n-K_q2vr0P8uaG-A0&ohost=www.google.com&cid=CAESVuD2GoCZMqiEl3P2Udgf4afOgpJ0GwfiDl2qkc5r7M7r0xH2J8IbuRkqQ9wN0-8skmwnQpUHePfkebp_qXmTySr9Z88RTG9Hfvk0Ak7f4TUXNDea0LPf&sig=AOD64_1l_RDsxrf34O19rxJcvetclbOvMg&q&sqi=2&nis=4&adurl&ved=2ahUKEwiZ88KvovWJAxV6m68BHXKzAd8Q0Qx6BAgQEAE';
  }


}
