  // product.service.ts
  import { Injectable } from '@angular/core';
  import {Product, Product2} from './models/product.model';


  @Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    products: Product[] = [
      { id: 1, name: 'Áo sơ mi nam', quantity: 2, price: 100000, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Áo thun nữ', quantity: 5, price: 150000, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Áo khoác nam', quantity: 3, price: 300000, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Áo len nữ', quantity: 7, price: 250000, image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Quần jeans nam', quantity: 6, price: 350000, image: 'https://via.placeholder.com/150' },
      { id: 6, name: 'Quần short nữ', quantity: 4, price: 200000, image: 'https://via.placeholder.com/150' },
      { id: 7, name: 'Váy dạ hội', quantity: 1, price: 600000, image: 'https://via.placeholder.com/150' },
      { id: 8, name: 'Đầm công sở', quantity: 3, price: 500000, image: 'https://via.placeholder.com/150' },
      { id: 9, name: 'Áo hoodie nam', quantity: 8, price: 280000, image: 'https://via.placeholder.com/150' },
      { id: 10, name: 'Áo khoác gió nữ', quantity: 2, price: 400000, image: 'https://via.placeholder.com/150' },
      { id: 11, name: 'Áo sơ mi trẻ em', quantity: 9, price: 180000, image: 'https://via.placeholder.com/150' },
      { id: 12, name: 'Quần âu nam', quantity: 3, price: 320000, image: 'https://via.placeholder.com/150' },
      { id: 13, name: 'Áo phông nữ', quantity: 5, price: 130000, image: 'https://via.placeholder.com/150' },
      { id: 14, name: 'Váy maxi', quantity: 4, price: 420000, image: 'https://via.placeholder.com/150' },
      { id: 15, name: 'Quần baggy nam', quantity: 6, price: 310000, image: 'https://via.placeholder.com/150' },
      { id: 16, name: 'Áo khoác lông', quantity: 2, price: 700000, image: 'https://via.placeholder.com/150' },
      { id: 17, name: 'Áo cardigan nữ', quantity: 7, price: 290000, image: 'https://via.placeholder.com/150' },
      { id: 18, name: 'Quần short nam', quantity: 4, price: 150000, image: 'https://via.placeholder.com/150' },
      { id: 19, name: 'Áo blazer nữ', quantity: 3, price: 480000, image: 'https://via.placeholder.com/150' },
      { id: 20, name: 'Áo len cổ lọ', quantity: 5, price: 270000, image: 'https://via.placeholder.com/150' }
    ];


    product2: Product2[] = [
      { id: 1, name: 'Túi xách nữ', quantity: 2, price: 100000, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Kính mát nam', quantity: 5, price: 150000, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Vòng tay nữ', quantity: 3, price: 200000, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Dây chuyền nam', quantity: 4, price: 180000, image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Khuyên tai nữ', quantity: 6, price: 120000, image: 'https://via.placeholder.com/150' },
      { id: 6, name: 'Đồng hồ nam', quantity: 1, price: 500000, image: 'https://via.placeholder.com/150' },
      { id: 7, name: 'Đồng hồ nữ', quantity: 2, price: 550000, image: 'https://via.placeholder.com/150' },
      { id: 8, name: 'Thắt lưng da nam', quantity: 3, price: 220000, image: 'https://via.placeholder.com/150' },
      { id: 9, name: 'Thắt lưng nữ', quantity: 7, price: 180000, image: 'https://via.placeholder.com/150' },
      { id: 10, name: 'Ví da nam', quantity: 4, price: 320000, image: 'https://via.placeholder.com/150' },
      { id: 11, name: 'Ví nữ', quantity: 5, price: 300000, image: 'https://via.placeholder.com/150' },
      { id: 12, name: 'Bông tai trẻ em', quantity: 8, price: 100000, image: 'https://via.placeholder.com/150' },
      { id: 13, name: 'Mũ lưỡi trai', quantity: 6, price: 180000, image: 'https://via.placeholder.com/150' },
      { id: 14, name: 'Mũ rộng vành', quantity: 2, price: 230000, image: 'https://via.placeholder.com/150' },
      { id: 15, name: 'Kính thời trang nữ', quantity: 3, price: 350000, image: 'https://via.placeholder.com/150' },
      { id: 16, name: 'Găng tay nam', quantity: 4, price: 150000, image: 'https://via.placeholder.com/150' },
      { id: 17, name: 'Găng tay nữ', quantity: 5, price: 170000, image: 'https://via.placeholder.com/150' },
      { id: 18, name: 'Khăn choàng cổ', quantity: 2, price: 200000, image: 'https://via.placeholder.com/150' },
      { id: 19, name: 'Dây chuyền bạc nữ', quantity: 3, price: 400000, image: 'https://via.placeholder.com/150' },
      { id: 20, name: 'Mũ bảo hiểm thời trang', quantity: 6, price: 450000, image: 'https://via.placeholder.com/150' }
    ];


    private selectedProduct: Product | null = null;
    private selectedProduct2: Product2 | null = null;

    setSelectedProduct(product: Product) {
      this.selectedProduct = product;
    }

    getSelectedProduct(): Product | null {
      return this.selectedProduct;
    }

    setSelectedProduct2(product: Product2) {
      this.selectedProduct2 = product;
    }

    getSelectedProduct2(): Product2 | null {
      return this.selectedProduct2;
    }

  }
