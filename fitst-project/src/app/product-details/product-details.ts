import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  productName: string = 'Laptop';
  productDescription: string = 'High-performance laptop';
  productPrice: number = 750;
  productImage: string = 'images/laptop.jpg';
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10;

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  updateName(name: string): void {
    this.productName = name;
  }

  getFinalPrice(): number {
    return this.productPrice -
      (this.productPrice * this.discountPercentage / 100);
  }

  getTotalPrice(): number {
    return this.getFinalPrice() * this.quantity;
  }

}