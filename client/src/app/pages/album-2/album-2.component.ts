import {Product2} from '../../models/product.model';
import {ProductService} from '../../products.service';
import {Router, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {CurrencyPipe, NgForOf ,NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {CarouselComponent, SlideComponent} from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-album-2',
  standalone: true,
  imports: [MatIcon, CurrencyPipe, NgIf, NgForOf, RouterLink, CarouselComponent, SlideComponent],
  templateUrl: './album-2.component.html',
  styleUrls: ['./album-2.component.scss']
})
export class Album2_Component implements OnInit {
  products: Product2[] = [];
  filteredProducts: Product2[] = [];

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
