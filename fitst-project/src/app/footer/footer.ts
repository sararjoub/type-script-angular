import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  storeName: string = 'ElectroShop';
  storeAddress: string = 'Amman, Jordan';
  contactEmail: string = 'info@electroshop.com';
  copyright: string = '© 2026 ElectroShop. All Rights Reserved.';

}