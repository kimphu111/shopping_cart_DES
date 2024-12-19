import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BillingService } from '../../../../service/billing/billing.service';
import { Billing } from '../../../models/billing.model';

@Component({
  selector: 'app-admin-billing',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './admin-billing.component.html',
  styleUrl: './admin-billing.component.scss'
})
export class AdminBillingComponent {

  billing: Billing[] = [];

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {
    this.billingService.getBilling().subscribe(billing => {this.billing = billing});
  }

  deleteBilling(id: number){
    this.billing = this.billing.filter(bill => bill.id !== id);
  }
}
