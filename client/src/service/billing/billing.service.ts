import { Injectable } from '@angular/core';
import { Billing } from '../../app/models/billing.model'
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = 'http://localhost:8000/api/billing';

  constructor(private http:HttpClient ) {}

  getAllBilling(): Observable<Billing[]> {
    return this.http.get<Billing[]>(this.apiUrl);
  }

  addBilling(orderDetails: Billing): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.apiUrl, orderDetails, { headers });
  }

  deleteBilling(billingId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${billingId}`);
  }

}






