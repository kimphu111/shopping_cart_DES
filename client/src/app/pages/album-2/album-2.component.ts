import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ProductService} from '../../products.service';
import {Product2} from '../../models/product.model';

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
export class Album2_Component implements OnInit {
  product2 : Product2[] = [];
  filteredProducts :  Product2[] = [];

  constructor(private readonly productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.product2 = this.productService.product2;
    this.filteredProducts = this.product2;
  }

  searchProducts(searchTerm: string) {
    if (searchTerm) {
      this.filteredProducts = this.product2.filter(product2 =>
        product2.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.product2;
    }
  }

  onSelectProduct(product2: Product2) {
    this.productService.setSelectedProduct2(product2);
    this.router.navigate(['/detail'], { queryParams: { type: 'product2' } });
  }

}
