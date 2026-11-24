import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  selectedPage: string = 'Home';

  changePage(page: string): void {
    this.selectedPage = page;
  }

}