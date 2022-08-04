import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';
import { OptionsObjectFilter } from '../interfaces/filter';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(queryString?: OptionsObjectFilter[]) {
    let url = environment.jsonUrl;
    if (queryString) {
      let str = '';
      for (let item of queryString) {
        if (!item.type && item.value) {
          str += `&q=${item.value}`;
        } else if (typeof item.value === 'object') {
          str += `&${item.type}_gte=${item.value.minValue}&${item.type}_lte=${item.value.maxValue}`;
        } else {
          str += `&${item.type}=${item.value}`;
        }
      }
      url += str;
    }

    return this.http.get<Product[]>(url);
  }
}
