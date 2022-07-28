import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  products: Product[] = [];
  brandFilteringArray: string[] = [];

  brandList = ['samsung', 'apple', 'nokia', 'xiaomi'];
  colorList = [];

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

  filterDataByBrend(event: any) {
    if (event.target.checked) {
      this.brandFilteringArray.push(event.target.value);
    } else {
      this.brandFilteringArray = this.brandFilteringArray.filter(
        (item) => item !== event.target.value
      );
    }
    this.products = [];

    if (this.brandFilteringArray.length) {
      for (let i of this.brandFilteringArray) {
        this.http
          .get(`${environment.jsonUrl}?brand=${i}`)
          .subscribe((res: any) => {
            this.products.push(...res);
          });
      }
    } else {
      this.getData();
    }
  }
}
