import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BillingService } from '../../../../service/billing/billing.service';
import { Billing } from '../../../models/billing.model';
import { ProductService } from '../../../products.service';
import { Product } from '../../../models/product.model';
import { User } from '../../../models/user.model';
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
  userName: User | null = null;

  constructor(private billingService: BillingService,
              private productService: ProductService,
              private userService: UserService
  ) {}

  ngOnInit(): void {
    this.billingService.getBilling().subscribe(billing => {this.billing = billing});

    
    this.productService.currentProduct.subscribe(product => {
      if (product) {
        this.addProductToBilling(product);
      }
    });

    this.userService.currentUser.subscribe(user => {
      this.userName = user[0];
    });
    
  }
  
  addProductToBilling(product: any) { 
    const newBilling: Billing = {
      id: this.billing.length + 1,
      productName: product.name,
      userName: this.userName?.userName || 'Unknown User',
      phone: product.phoneNumber,
      address: product.address,
      date: new Date().toISOString()
    };
    this.billing.unshift(newBilling);
  }

  deleteBilling(id: number){
    this.billing = this.billing.filter(bill => bill.id !== id);
  }

  


}
