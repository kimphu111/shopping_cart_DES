  // product.service.ts
  import { Injectable } from '@angular/core';
  import {Product, Product2} from './models/product.model';

  @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    products: Product[] = [
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
      { id: 12, name: 'Áo thun trẻ em', price: 1200000, image: 'https://via.placeholder.com/150' },

    ];

      product2: Product2[] = [
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

        private selectedProduct: Product | null = null;
        private selectedProduct2: Product2 | null = null;

    setSelectedProduct(product: Product) {
      this.selectedProduct = product;
    }

    getSelectedProduct(): Product | null {
      return this.selectedProduct;
    }


    getSelectedProduct2(): Product2 | null {
      return this.selectedProduct2;
    }

    setSelectedProduct2(product2: Product2) {
      this.selectedProduct2 = product2;
    }
  }
