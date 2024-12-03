import {Product2} from '../../models/product.model';
import {ProductService} from '../../products.service';
import {Router, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {CurrencyPipe, NgForOf ,NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-album-2',
  standalone: true,
  imports: [MatIcon, CurrencyPipe,NgIf, NgForOf, RouterLink],
  templateUrl: './album-2.component.html',
  styleUrls: ['./album-2.component.scss']
})
export class Album2_Component implements OnInit {
  products: Product2[] = [];
  filteredProducts: Product2[] = [];

  constructor(private readonly productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.product2;
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

  onSelectProduct(product: Product2) {
    this.productService.setSelectedProduct2(product);
    this.router.navigate(['/detail'], { queryParams: { id:product.id, type: 'product2' } });
  }
}
