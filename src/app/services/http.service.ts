import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';
import {
  ObjFilterParams,
  OptionsObjectFilter,
  ValueObjectParameters,
} from '../interfaces/filter';
import { FilterType } from '../constants/Catalog';
import { OrderForm } from '../interfaces/orderForm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getData(queryString?: ObjFilterParams) {
    let url =
      environment.jsonUrl +
      `_page=${queryString?.page}&_limit=${queryString?.pageSize}`;

    if (queryString) {
      let str = '';
      for (let item of queryString.filterArray) {
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
      console.log(url);
    }
    return this.http.get(url, { observe: 'response' });
  }

  public sendOrders(data: OrderForm): Observable<OrderForm> {
    return this.http.post<OrderForm>(`${environment.jsonPostOrders}`, data);
  }

  public addProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.jsonAddProduct}`, data);
  }
}
