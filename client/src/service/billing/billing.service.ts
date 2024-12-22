import { Injectable } from '@angular/core';
import { Billing } from '../../app/models/billing.model'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private billing: Billing[] = [
    {
      id: 1,
      productName: "Laptop",
      userName: "John Doe",
      phone: "+1234567890",
      address: "1234 Elm Street, Springfield, IL",
      date: "2024-12-15"
  },
  {
      id: 2,
      productName: "Smartphone",
      userName: "Jane Smith",
      phone: "+1987654321",
      address: "5678 Oak Avenue, Chicago, IL",
      date: "2024-12-17"
  },
  {
      id: 3,
      productName: "Headphones",
      userName: "Alice Johnson",
      phone: "+1122334455",
      address: "9876 Pine Road, Miami, FL",
      date: "2024-12-18"
  },
  {
      id: 4,
      productName: "Smartwatch",
      userName: "Bob Brown",
      phone: "+5566778899",
      address: "4321 Maple Lane, Dallas, TX",
      date: "2024-12-16"
  },
  {
      id: 5,
      productName: "Tablet",
      userName: "Charlie Davis",
      phone: "+6677889900",
      address: "2468 Birch Street, San Francisco, CA",
      date: "2024-12-14"
  }
  ];

  constructor() { }

  getBilling(): Observable<Billing[]> {
    return of(this.billing);
  }

  getBillingById(id: number): Observable<Billing | undefined> {
    return of(this.billing.find(bill => bill.id === id));
  }
}
