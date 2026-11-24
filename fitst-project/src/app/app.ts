import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isStoreOpen: boolean = true;
  storeStatus: string = '';

  productPrices: number[] = [750, 450, 80, 120, 45];

  totalProducts: number = 0;
  highestPrice: number = 0;
  lowestPrice: number = 0;
  totalValue: number = 0;

  constructor() {

    if (this.isStoreOpen == true) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }

    this.totalProducts = this.productPrices.length;

    this.highestPrice = this.productPrices[0];
    this.lowestPrice = this.productPrices[0];

    for (let i = 0; i < this.productPrices.length; i++) {

      this.totalValue = this.totalValue + this.productPrices[i];

      if (this.productPrices[i] > this.highestPrice) {
        this.highestPrice = this.productPrices[i];
      }

      if (this.productPrices[i] < this.lowestPrice) {
        this.lowestPrice = this.productPrices[i];
      }

    }

  }

}