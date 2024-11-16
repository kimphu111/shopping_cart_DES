import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProductService } from '../../../service/products.service';
import { Product } from '../../models/product.model'; // Import Product model

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
  styleUrls: ['./album-1.component.scss']
})
export class Album1_Component implements OnInit {
  products: Product[] = []; // Khai báo kiểu Product[]
  filteredProducts: Product[] = [];

  constructor(private readonly productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.products;
    this.filteredProducts = this.products;
  }

  searchProducts(searchTerm: string) {
    if (searchTerm) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  onSelectProduct(product: Product) {
    this.productService.setSelectedProduct(product);
    this.router.navigate(['/detail'], { queryParams: { type: 'product' } });
  }

}
