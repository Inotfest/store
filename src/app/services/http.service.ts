import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(queryString: string) {
    return this.http.get<Product[]>(queryString);
  }


  

  // searchInData(searchText: string) {
  //   return this.http.get<Product[]>(`${environment.jsonUrl}?q=${searchText}`);
  // }

  // filterDataByBrend(event: any) {
  //   if (event.target.checked) {
  //     this.brandFilteringArray.push(event.target.value);
  //   } else {
  //     this.brandFilteringArray = this.brandFilteringArray.filter(
  //       (item) => item !== event.target.value
  //     );
  //   }
  //   this.products = [];

  //   if (this.brandFilteringArray.length) {
  //     for (let i of this.brandFilteringArray) {
  //       this.http
  //         .get(`${environment.jsonUrl}?brand=${i}`)
  //         .subscribe((res: any) => {
  //           this.products.push(...res);
  //         });
  //     }
  //   } else {
  //     this.getData();
  //   }
  // }
}
