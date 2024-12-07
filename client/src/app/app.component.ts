import { Component,OnInit  } from '@angular/core';
import {NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {ProductService} from './products.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, MatIcon, RouterLinkActive, NgIf, MatIconButton, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements  OnInit{
  constructor(private route: Router,
              private productService: ProductService,

              ) {}

  title = 'client';
  isSearchPopupVisible: any;
  searchQuery = '';

  toggleSearchBar() {
    this.isSearchPopupVisible = !this.isSearchPopupVisible; // Bật/tắt thanh tìm kiếm
  }

  closeSearchPopup() {
    this.isSearchPopupVisible = false;
  }

  searchProducts(query: string) {
    if (!query.trim()) {
      console.warn('Vui lòng nhập từ khóa tìm kiếm');
      return;
    }
    console.log('Tìm kiếm sản phẩm với từ khóa:', query);
    this.closeSearchPopup();
  }

  ngOnInit() {
    //Ham cuon len dau trang khi chuyen trang
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({top:0, behavior:'smooth'});
      }
    });
  }
}
