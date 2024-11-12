import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-album-1',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgIf,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './album-1.component.html',
  styleUrl: './album-1.component.scss'
})
export class Album1_Component {
      products = [
        { id: 1, name: 'Áo sơ mi nam', price: 100000, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Áo thun nam', price: 200000, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Áo khoác nam', price: 300000, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Áo len nam', price: 400000, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Áo phông nam', price: 500000, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Áo sơ mi nữ', price: 600000, image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Áo thun nữ', price: 700000, image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Áo khoác nữ', price: 800000, image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Áo len nữ', price: 900000, image: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Áo phông nữ', price: 1000000, image: 'https://via.placeholder.com/150' },
        { id: 11, name: 'Áo sơ mi trẻ em', price: 1100000, image: 'https://via.placeholder.com/150' },
        { id: 12, name: 'Áo thun trẻ em', price: 1200000, image: 'https://via.placeholder.com/150' }
      ];

  // Biến để lưu kết quả tìm kiếm
  filteredProducts = this.products;

  // Hàm để lọc sản phẩm dựa theo từ khóa tìm kiếm
  searchProducts(searchTerm: string) {
    if (searchTerm) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
