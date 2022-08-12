import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';
import {
  OptionsObjectFilter,
  ValueObjectParameters,
} from '../interfaces/filter';
import { FilterType } from '../constants/Catalog';
import { OrderForm } from '../interfaces/orderForm';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getData(queryString?: OptionsObjectFilter[]) {
    let url = environment.jsonUrl;
    if (queryString) {
      let str = '';
      for (let item of queryString) {
        switch (item.category) {
          case FilterType.SEARCH:
            str += `&q=${item.value}`;
            break;
          case FilterType.CATEGORY:
            str += `&${item.type}=${item.value}`;
            break;
          case FilterType.CATEGORY_RANGE:
            str += `&${item.type}_gte=${
              (<ValueObjectParameters>item.value).minValue
            }&${item.type}_lte=${(<ValueObjectParameters>item.value).maxValue}`;
            break;
          default:
            str = '';
        }
      }
      url += str;
    }
    return this.http.get<Product[]>(url);
  }

  public sendOrders(data: OrderForm) {
    return this.http.post(`${environment.jsonPostOrders}`, data);
  }
}
