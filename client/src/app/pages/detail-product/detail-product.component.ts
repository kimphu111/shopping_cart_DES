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

interface DisplayProduct {
  id: number;
  name: string;
  quantity: number;
  userQuantity: number;
  price: number;
  image: string;
  type: 'product' | 'product2'; // Xác định loại sản phẩm
}

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule, FormsModule],
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

  userQuantity = 1;

  constructor(private productService: ProductService,
              private route : ActivatedRoute
  ) {}

  increaseQuantity(productItem: any) {
    if(productItem.userQuantity < productItem.quantity){
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
    // Lắng nghe các thay đổi của queryParams
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      if (type === 'product') {
        const product = this.productService.getSelectedProduct();
        if (product) {
          this.displayProducts = [{ ...product, userQuantity: 1, type: 'product' }];
        }
      } else if (type === 'product2') {
        const product2 = this.productService.getSelectedProduct2();
        if (product2) {
          this.displayProducts = [{ ...product2, userQuantity: 1, type: 'product2' }];
        }
      }
      // Lưu sản phẩm vào localStorage để đảm bảo dữ liệu được bảo tồn
      localStorage.setItem('currentProduct', JSON.stringify(this.displayProducts));
    });

    // Nếu có dữ liệu trong localStorage, khôi phục lại
    const cachedProduct = localStorage.getItem('currentProduct');
    if (cachedProduct) {
      this.displayProducts = JSON.parse(cachedProduct);
    }
    console.log(this.displayProducts); // Kiểm tra giá trị tại đây
  }

  loadProduct(): void {
    this.product = this.productService.getSelectedProduct();
    console.log('Selected Product:', this.product);
  }

  // Hiển thị popup
  openPopup() {
    this.showPopup = true;
  }

  // Đóng popup
  closePopup() {
    this.showPopup = false;
  }
  closeSuccessPopup() {
    this.showSuccessPopup = false;
  }

  // Xử lý khi nhấn "Đặt Hàng"
  submitOrder(productItem: Product) {
    if (this.order.fullName && this.order.phoneNumber && this.order.address) {
      console.log('Đặt hàng thành công với thông tin sau:');
      console.log('Họ tên: ', this.order.fullName);
      console.log('Số điện thoại: ', this.order.phoneNumber);
      console.log('Địa chỉ: ', this.order.address);

      const orderDetails = {
        ...productItem,
        fullName: this.order.fullName,
        phoneNumber: this.order.phoneNumber,
        address: this.order.address
      };
      this.productService.changeProduct(orderDetails);


      this.showPopup = false; // Ẩn popup nhập thông tin
      this.showSuccessPopup = true; // Hiển thị popup thành công
    } else {
      alert('Vui lòng điền đầy đủ thông tin trước khi đặt hàng!');
    }
  }

}
