
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Store Information
  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Amman, Jordan';
  totalProducts: number = 0;
  isStoreOpen: boolean = true;
  storeStatus: string = '';
  currency: string = 'USD';

  // Products Information
  productNames: string[] = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Smart Watch',
    'Keyboard'
  ];

  productPrices: number[] = [750, 450, 80, 120, 45];

  // Featured Product
  featuredProduct = {
    name: 'Laptop',
    price: 750,
    description: 'High-performance laptop'
  };

  // Discount
  discountPercentage: number = 10;
  finalPrice: number = 0;

  // Store Summary
  highestPrice: number = 0;
  lowestPrice: number = 0;
  totalValue: number = 0;

  constructor() {

    // Store Status
    if (this.isStoreOpen == true) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }

    // Discount Calculation
    if (this.discountPercentage > 0) {
      this.finalPrice = this.featuredProduct.price -
        (this.featuredProduct.price * this.discountPercentage / 100);
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    // Total Products
    this.totalProducts = this.productNames.length;

    // Highest and Lowest Price
    this.highestPrice = this.productPrices[0];
    this.lowestPrice = this.productPrices[0];

    // Loop to Calculate Store Summary
    for (let i = 0; i < this.productPrices.length; i++) {

      // Total Value
      this.totalValue = this.totalValue + this.productPrices[i];

      // Highest Price
      if (this.productPrices[i] > this.highestPrice) {
        this.highestPrice = this.productPrices[i];
      }

      // Lowest Price
      if (this.productPrices[i] < this.lowestPrice) {
        this.lowestPrice = this.productPrices[i];
      }

    }

  }

}
