import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { ObjFilterParams, ValueObjectParameters } from '../interfaces/filter';
import { FilterType } from '../constants/Catalog';
import { OrderForm } from '../interfaces/orderForm';
import { Observable } from 'rxjs';
import { PageSize } from '../constants/PageSize';
import { URL } from '../constants/Url';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getData(queryParams: ObjFilterParams) {
    let url =
      URL.JSON +
      URL.PRODUCTS +
      `_page=${queryParams?.page ?? 1}&_limit=${
        queryParams?.pageSize ?? PageSize.SIZE
      }`;

    if (queryParams) {
      let str = '';
      for (let item of queryParams.filterArray) {
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
    return this.http.get(url, { observe: 'response' });
  }

  public sendOrders(data: OrderForm): Observable<OrderForm> {
    return this.http.post<OrderForm>(URL.JSON + URL.ORDERS, data);
  }

  public addProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(URL.JSON + URL.PRODUCTS, data);
  }
}
