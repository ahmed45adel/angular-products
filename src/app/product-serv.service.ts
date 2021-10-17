import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products')
  }
  getProduct(id: any) {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
