import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = [
    {
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image: 'images/laptop.jpg',
      isAvailable: true
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'images/smartphone.jpg',
      isAvailable: true
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'images/headphones.jpg',
      isAvailable: true
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'images/watch.jpg',
      isAvailable: true
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'images/keyboard.jpg',
      isAvailable: false
    }
  ];

  buyProduct(productName: string): void {
    alert('You purchased ' + productName);
  }

}