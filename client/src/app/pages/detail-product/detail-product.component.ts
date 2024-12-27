import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {ProductService} from '../../products.service';
import {Product} from '../../models/product.model';
import {Product2} from '../../models/product.model';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BillingService} from '../../../../src/service/billing/billing.service';
import {Billing} from '../../models/billing.model';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

interface DisplayProduct {
  id: number;
  name: string;
  quantity: number;
  userQuantity: number;
  price: number;
  image: string;
  type: 'product' | 'product2';
}

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule, FormsModule, MatProgressSpinner],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent implements OnInit {
  displayProducts: DisplayProduct[] = []; // Mảng hợp nhất sản phẩm
  product: Product | null = null;
  product2: Product2 | null = null;
  showPopup: boolean = false;
  order = {
    fullName: '',
    phoneNumber: '',
    address: ''
  }; // Lưu thông tin người dùng
  showSuccessPopup: boolean = false; // Hiển thị popup thành công
  isLoading = false;
  userQuantity = 1;
  billing: Billing[] = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private billingService: BillingService,
  ) {
  }

  increaseQuantity(productItem: any) {
    if (productItem.userQuantity < productItem.quantity) {
      productItem.userQuantity++;
    }
  }

  decreaseQuantity(productItem: any) {
    if (productItem.userQuantity > 0) {
      productItem.userQuantity--;
    }
  }

  ngOnInit() {
    this.loadProduct();
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      if (type === 'product') {
        const product = this.productService.getSelectedProduct();
        if (product) {
          this.displayProducts = [{...product, userQuantity: 1, type: 'product'}];
        }
      } else if (type === 'product2') {
        const product2 = this.productService.getSelectedProduct2();
        if (product2) {
          this.displayProducts = [{...product2, userQuantity: 1, type: 'product2'}];
        }
      }
      localStorage.setItem('currentProduct', JSON.stringify(this.displayProducts));
    });

    const cachedProduct = localStorage.getItem('currentProduct');
    if (cachedProduct) {
      this.displayProducts = JSON.parse(cachedProduct);
    }
    console.log(this.displayProducts);
  }

  loadProduct(): void {
    this.product = this.productService.getSelectedProduct();
    console.log('Selected Product:', this.product);
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  submitOrder(productItem: DisplayProduct) {
    if (!this.order.fullName || !this.order.phoneNumber || !this.order.address) {
      alert('Vui lòng điền đầy đủ thông tin trước khi đặt hàng!');
      return;
    }

    this.isLoading = true;

    const orderDetails: Billing = {
      id: 0,
      productName: productItem.name,
      userName: this.order.fullName,
      phone: this.order.phoneNumber,
      address: this.order.address,
      date: new Date().toISOString(),
    };

    console.log('Chi tiết đơn hàng:', orderDetails);

    this.billingService.addBilling(orderDetails).subscribe({
      next: (response: any) => {
        console.log('Phản hồi từ API:', response);
        this.isLoading = false;
        this.showPopup = false;
        this.showSuccessPopup = true;
      },
      error: (err) => {
        console.error('Đặt hàng thất bại:', err);
        this.isLoading = false; // Dừng spinner khi có lỗi
        alert('Đặt hàng thất bại! Vui lòng thử lại.');
      },
      complete: () => {
        console.log('Đặt hàng hoàn thành!');
        this.isLoading = false; // Đảm bảo tắt loading khi hoàn thành
      },
    });
  }





  closeSuccessPopup() {
    this.showSuccessPopup = false;
    this.order = { fullName: '', phoneNumber: '', address: '' }; // Reset thông tin người dùng
    this.isLoading = false;
  }
}
