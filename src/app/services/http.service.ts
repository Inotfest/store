import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get<Product[]>(environment.jsonUrl)
      .subscribe((res) => (this.products = res));
  }

  searchInData(searchText: string) {
    this.http
      .get<Product[]>(`${environment.jsonUrl}?q=${searchText}`)
      .subscribe((res) => (this.products = res));
  }
}
