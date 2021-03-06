import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDefaultCustomer(): Observable<Customer> {
    return this.http.get<Customer>(`${environment.serviceUri}customer-service/${environment.customerName}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.serviceUri}products-service`);
  }
}
