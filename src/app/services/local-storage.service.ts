import { Injectable } from '@angular/core';
import { Product, Invoice } from '../interfaces/product';
import { LocalStorageKey } from '../constants/LocalStorageKey';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public itemsInTheСart = 0;

  public orders$ = new Subject<number>();

  constructor() {}

  public addProductToLocalstorage(product: Product, amount: number) {
    const waybill: Invoice = { product: product, numberOfproducts: amount };

    let arrayProducts = [waybill];

    const dataFromLocalStorage = this.getDataFromLocalStorage();

    if (dataFromLocalStorage.length) {
      arrayProducts = dataFromLocalStorage;
      arrayProducts.push(waybill);
    }

    const jsonProducts = JSON.stringify(arrayProducts);

    localStorage.setItem(LocalStorageKey.KEY, jsonProducts);

    this.orders$.next(arrayProducts.length);
  }

  public checkNumberOfGoods() {
    return this.getDataFromLocalStorage().length;
  }

  public getDataFromLocalStorage() {
    const jsonProduct = localStorage.getItem(LocalStorageKey.KEY);
    if (jsonProduct) {
      return JSON.parse(jsonProduct);
    }
    return [];
  }

  public deleteItemFromLocalStorage(id: number) {
    const arrayProducts: Invoice[] = this.getDataFromLocalStorage();

    localStorage.removeItem(LocalStorageKey.KEY);

    const newArrayProducts = arrayProducts.filter(
      (item) => item.product.id !== id
    );

    this.orders$.next(newArrayProducts.length);

    const jsonProducts = JSON.stringify(newArrayProducts);

    localStorage.setItem(LocalStorageKey.KEY, jsonProducts);
  }
}
