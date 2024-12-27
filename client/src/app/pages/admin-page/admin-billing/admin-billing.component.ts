import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BillingService } from '../../../../service/billing/billing.service';
import { Billing } from '../../../models/billing.model';
import { ProductService } from '../../../products.service';
import { Product } from '../../../models/product.model';
import { UserService } from '../../../../service/user/user.service';

@Component({
  selector: 'app-admin-billing',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './admin-billing.component.html',
  styleUrl: './admin-billing.component.scss'
})
export class AdminBillingComponent {

  billing: Billing[] = [];
  product: Product  | null = null;
  showConfirmPopup: boolean = false;
  confirmBillingId: number = -1;
  isLoading: boolean = false;

  constructor(private billingService: BillingService,
              private productService: ProductService,
              private userService: UserService
  ) {}

  ngOnInit(): void {
    this.billingService.getAllBilling().subscribe(
      (response: Billing[]) => {
        this.billing = response;
        // console.log('Dữ liệu thanh toán:', this.billing);
      },
      (err: any) => {
        console.error('Lỗi khi tải dữ liệu thanh toán:', err);
      }
    );

    this.getBillingData();
  }

  getBillingData(): void {
    this.billingService.getAllBilling().subscribe(
      (response: Billing[]) => {
        this.billing = response;
        // console.log('Dữ liệu thanh toán:', this.billing);
      },
      (err: any) => {
        console.error('Lỗi khi tải dữ liệu thanh toán:', err);
      }
    );
  }


  deleteBilling(): void {
    if (this.confirmBillingId !== -1) {
      this.isLoading = true;
      console.log("Bắt đầu xóa thanh toán với ID:", this.confirmBillingId);

      this.billingService.deleteBilling(this.confirmBillingId).subscribe(
        (response) => {
          console.log('Đã xóa thanh toán thành công:', response);

          setTimeout(() => {
            console.log("Đang reload trang...");
            this.isLoading = false; // Tắt spinner
            alert("Xóa thanh toán thành công!");
            window.location.reload();
          }, 100);
        },
        (err: any) => {
          console.error('Lỗi khi xóa thanh toán:', err);
          this.isLoading = false; // Tắt spinner nếu có lỗi
        }
      );
    } else {
      console.error("Không có ID thanh toán để xóa");
    }
  }





  openConfirmPopup(billingId: number): void {
    this.confirmBillingId = billingId;
    this.showConfirmPopup = true;
  }

  closeConfirmPopup(): void {
    this.showConfirmPopup = false;
    this.confirmBillingId = -1;
  }


}








