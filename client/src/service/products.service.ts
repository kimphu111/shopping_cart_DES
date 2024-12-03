// product.service.ts
import { Injectable } from '@angular/core';
import {Product, Product2} from '../app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Áo sơ mi nam', quantity: 1, price: 100000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Áo thun nam', quantity: 1,  price: 200000, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Áo khoác nam', quantity: 1,  price: 300000, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Áo len nam', quantity: 1,  price: 400000, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Áo phông nam', quantity: 1,  price: 500000, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Áo sơ mi nữ', quantity: 1,  price: 600000, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Áo thun nữ', quantity: 1,  price: 700000, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Áo khoác nữ',quantity: 1,  price: 800000, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Áo len nữ', quantity: 1,  price: 900000, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Áo phông nữ', quantity: 1,  price: 1000000, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Áo sơ mi trẻ em', quantity: 1,  price: 1100000, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Áo thun trẻ em', quantity: 1,  price: 1200000, image: 'https://via.placeholder.com/150' },

  ];

    product2: Product2[] = [
      { id: 1, name: 'Túi xách nữ', quantity: 1,  price: 100000, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Túi đeo chéo nữ', quantity: 1,  price: 200000, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Túi xách nam', quantity: 1,  price: 300000, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Túi đeo chéo nam', quantity: 1,  price: 400000, image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Mũ nón nữ', quantity: 1,  price: 500000, image: 'https://via.placeholder.com/150' },
      { id: 6, name: 'Mũ nón nam', quantity: 1,  price: 600000, image: 'https://via.placeholder.com/150' },
      { id: 7, name: 'Kính mát nữ', quantity: 1,  price: 700000, image: 'https://via.placeholder.com/150' },
      { id: 8, name: 'Kính mát nam', quantity: 1,  price: 800000, image: 'https://via.placeholder.com/150' },
      { id: 9, name: 'Dây chuyền nữ', quantity: 1,  price: 900000, image: 'https://via.placeholder.com/150' },
      { id: 10, name: 'Dây chuyền nam', quantity: 1,  price: 1000000, image: 'https://via.placeholder.com/150' },
      { id: 11, name: 'Vòng cổ nữ', quantity: 1,  price: 1100000, image: 'https://via.placeholder.com/150' },
      { id: 12, name: 'Vòng cổ nam', quantity: 1,  price: 1200000, image: 'https://via.placeholder.com/150' }
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
