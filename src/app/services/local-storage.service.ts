import { Injectable } from '@angular/core';
import { Product, Invoice } from '../interfaces/product';
import { LocalStorageKey } from '../constants/LocalStorageKey';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public itemsInTheСart: number = 0;

  public orders$ = new Subject<number>();

  constructor() {}

  public addProductToLocalstorage(product: Product, amount: number): void {
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

  public checkNumberOfGoods(): number {
    return this.getDataFromLocalStorage().length;
  }

  public getDataFromLocalStorage(): Invoice[] {
    const jsonProduct = localStorage.getItem(LocalStorageKey.KEY);
    if (jsonProduct) {
      return JSON.parse(jsonProduct);
    }
    return [];
  }

  public deleteItemFromLocalStorage(id: number): void {
    const arrayProducts: Invoice[] = this.getDataFromLocalStorage();

    this.deleteAllItemsFromLocalStorage();

    const newArrayProducts = arrayProducts.filter(
      (item) => item.product.id !== id
    );

    this.orders$.next(newArrayProducts.length);

    const jsonProducts = JSON.stringify(newArrayProducts);

    localStorage.setItem(LocalStorageKey.KEY, jsonProducts);
  }

  public deleteAllItemsFromLocalStorage(): void {
    localStorage.removeItem(LocalStorageKey.KEY);
    this.orders$.next(0);
  }
}
