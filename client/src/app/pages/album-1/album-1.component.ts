import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-album-1',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './album-1.component.html',
  styleUrl: './album-1.component.scss'
})
export class Album1_Component {
  products = [
    { name: 'Áo sơ mi', price: '500,000₫' },
    { name: 'Quần jean', price: '600,000₫' },
    { name: 'Giày thể thao', price: '1,200,000₫' },
    { name: 'Áo khoác', price: '800,000₫' },
    { name: 'Nón', price: '200,000₫' },
    { name: 'Balo', price: '750,000₫' }
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
