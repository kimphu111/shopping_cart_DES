// product.service.ts
import { Injectable } from '@angular/core';
import {Product, Product2} from './models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Áo Hoodie đen', quantity: 2, price: 100000, image: '/assets/prod-pic/1.png' },
    { id: 2, name: 'Áo thun SOCIAL ', quantity: 5, price: 150000, image: '/assets/prod-pic/2.png' },
    { id: 3, name: 'Áo Sweater ', quantity: 3, price: 300000, image: '/assets/prod-pic/3.png' },
    { id: 4, name: 'Quần nỉ trắng', quantity: 7, price: 250000, image: '/assets/prod-pic/4.png' },
    { id: 5, name: 'Quần SOCIAl đen ', quantity: 6, price: 350000, image: '/assets/prod-pic/5.png' },
    { id: 6, name: 'Quần SOCIAL trắng', quantity: 4, price: 200000, image: '/assets/prod-pic/6.png' },
    { id: 7, name: 'Áo khoác vải SOCIAL NAM', quantity: 1, price: 600000, image: '/assets/prod-pic/7.png' },
    { id: 8, name: 'Áo khoác vải SOCIAL NỮ', quantity: 3, price: 500000, image: '/assets/prod-pic/8.png' },
    { id: 9, name: 'Quần kaki đen', quantity: 8, price: 280000, image: '/assets/prod-pic/9.png' },
    { id: 10, name: 'Áo cotton SOCIAL', quantity: 2, price: 400000, image: '/assets/prod-pic/10.png' },
    { id: 11, name: 'Áo thun đen', quantity: 9, price: 180000, image: '/assets/prod-pic/11.png' },
    { id: 12, name: 'Quần thun xám', quantity: 3, price: 320000, image: '/assets/prod-pic/12.png' },
    { id: 13, name: 'Hoodie đen', quantity: 5, price: 130000, image: '/assets/prod-pic/13.png' },
    { id: 14, name: 'Hoodie trắng', quantity: 4, price: 420000, image: '/assets/prod-pic/14.png' },
    { id: 15, name: 'Hoodie GOODYEAR', quantity: 6, price: 310000, image: '/assets/prod-pic/15.png' },
    { id: 16, name: 'Áo thun basic', quantity: 2, price: 700000, image: '/assets/prod-pic/16.png' },
    { id: 17, name: 'Áo Hoodie butterfly', quantity: 7, price: 290000, image: '/assets/prod-pic/17.png' },
    { id: 18, name: 'Áo Hoodie black(nam)', quantity: 4, price: 150000, image: '/assets/prod-pic/18.png' },
    { id: 19, name: 'Áo Hoodie butterfly(nữ)', quantity: 3, price: 480000, image: '/assets/prod-pic/19.png' },
    { id: 20, name: 'Hoodie christmas', quantity: 5, price: 270000, image: '/assets/prod-pic/20.png' }
  ];


  product2: Product2[] = [
    { id: 1, name: 'Máy GUMBLE', quantity: 2, price: 100000, image: 'assets/prod-pic/21.png' },
    { id: 2, name: 'Lon nước 686', quantity: 5, price: 150000, image: 'assets/prod-pic/22.png' },
    { id: 3, name: 'Dù da beo', quantity: 3, price: 200000, image: 'assets/prod-pic/23.png' },
    { id: 4, name: 'Nón hiphop 2023', quantity: 4, price: 180000, image: 'assets/prod-pic/24.png' },
    { id: 5, name: 'Móc khóa xe', quantity: 6, price: 120000, image: 'assets/prod-pic/25.png' },
    { id: 6, name: 'Nón câu cá', quantity: 1, price: 500000, image: 'assets/prod-pic/26.png' },
    { id: 7, name: 'Ly inox 304 không rĩ', quantity: 2, price: 550000, image: 'assets/prod-pic/27.png' },
    { id: 8, name: 'Kính lặn biển', quantity: 3, price: 220000, image: 'assets/prod-pic/28.png' },
    { id: 9, name: 'Vớ social', quantity: 7, price: 180000, image: 'assets/prod-pic/29.png' },
    { id: 10, name: 'Bình nước 686 giữ nhiệt', quantity: 4, price: 320000, image: 'assets/prod-pic/30.png' },
    { id: 11, name: 'Nón kết GOODYEAR(collection)', quantity: 5, price: 300000, image: 'assets/prod-pic/31.png' },
    { id: 12, name: ' Dù Social', quantity: 8, price: 100000, image: 'assets/prod-pic/32.png' },
    { id: 13, name: 'Ghế cắm trại', quantity: 6, price: 180000, image: 'assets/prod-pic/33.png' },
    { id: 14, name: 'Nón cho người ung thư', quantity: 2, price: 230000, image: 'assets/prod-pic/34.png' },
    { id: 15, name: 'Nón thời trang  basic', quantity: 3, price: 350000, image: 'assets/prod-pic/35.png' },
    { id: 16, name: 'Ghế cắm trại(limited)', quantity: 4, price: 150000, image: 'assets/prod-pic/36.png' },
    { id: 17, name: 'Nón chùm hehe', quantity: 5, price: 170000, image: 'assets/prod-pic/37.png' },
    { id: 18, name: 'Dù báo đốm', quantity: 2, price: 200000, image: 'assets/prod-pic/38.png' },
    { id: 19, name: 'Kính leo núi', quantity: 3, price: 400000, image: 'assets/prod-pic/39.png' },
    { id: 20, name: 'Túi đựng cơm', quantity: 6, price: 450000, image: 'assets/prod-pic/40.png' }
  ];



  private selectedProduct: Product | null = null;
  private selectedProduct2: Product2 | null = null;

  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  }

  getSelectedProduct(): Product | null {
    if (this.selectedProduct) {
      return this.selectedProduct;
    }

    const storedProduct = localStorage.getItem('selectedProduct');
    return storedProduct ? JSON.parse(storedProduct) : null;
  }

  setSelectedProduct2(product: Product2) {
    this.selectedProduct2 = product;
    // Lưu vào localStorage
    localStorage.setItem('selectedProduct2', JSON.stringify(product));
  }

  getSelectedProduct2(): Product2 | null {
    if (this.selectedProduct2 === null) {
      const product = localStorage.getItem('selectedProduct2');
      this.selectedProduct2 = product ? JSON.parse(product) : null;
    }
    return this.selectedProduct2;
  }

  // searchProducts(query: string) {
  //   const lowerQuery = query.toLowerCase();
  //   return [...this.products, ...this.product2].filter(product => product.name.toLowerCase().includes(lowerQuery));
  // }
}
