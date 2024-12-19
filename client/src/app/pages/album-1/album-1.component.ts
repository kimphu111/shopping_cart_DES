import {Product} from '../../models/product.model';
import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ProductService} from '../../products.service';
import {CarouselComponent, SlideComponent} from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-album-1',
  standalone: true,
  imports: [MatIcon, NgForOf, NgIf, CurrencyPipe, RouterLink, CarouselComponent, SlideComponent],
  templateUrl: './album-1.component.html',
  styleUrls: ['./album-1.component.scss']
})
export class Album1_Component implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  slides = [
    { src: 'assets/slide3.jpg', title: 'Áo Quần Thời Trang' },
    { src: 'assets/slide2.jpg', title: 'Phong Cách Hiện Đại' },
    { src: 'assets/slide3.jpg', title: 'Giảm Giá Đặc Biệt' },
    { src: 'assets/slide4.jpg', title: 'Áo Quần Thời Trang' },
    { src: 'assets/slide5.jpg', title: 'Phong Cách Hiện Đại' },
    { src: 'assets/slide6.jpg', title: 'Giảm Giá Đặc Biệt' }
  ];





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
    this.router.navigate(['/detail'], { queryParams: { id: product.id, type: 'product' } });
  }
}
