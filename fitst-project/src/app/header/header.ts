import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  storeName: string = 'ElectroShop';

  welcomeMessage: string = 'Welcome to ElectroShop';

  storeSlogan: string = 'Everything You Need in One Place';

}