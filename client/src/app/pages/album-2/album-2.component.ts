import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-album-2',
  standalone: true,
  imports: [
    MatIcon,
    CurrencyPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './album-2.component.html',
  styleUrl: './album-2.component.scss'
})
export class Album2_Component {
  //tạo 12 món phu kien
    products = [
        { id: 1, name: 'Túi xách nữ', price: 100000, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Túi đeo chéo nữ', price: 200000, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Túi xách nam', price: 300000, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Túi đeo chéo nam', price: 400000, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Mũ nón nữ', price: 500000, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Mũ nón nam', price: 600000, image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Kính mát nữ', price: 700000, image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Kính mát nam', price: 800000, image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Dây chuyền nữ', price: 900000, image: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Dây chuyền nam', price: 1000000, image: 'https://via.placeholder.com/150' },
        { id: 11, name: 'Vòng cổ nữ', price: 1100000, image: 'https://via.placeholder.com/150' },
        { id: 12, name: 'Vòng cổ nam', price: 1200000, image: 'https://via.placeholder.com/150' }
      ];



// biến lưu kết quả tìm kiếm
  filteredProducts = this.products;

// Hàm lọc sản phẩm dựa theo
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
