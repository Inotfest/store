import { Injectable } from '@angular/core';
import { Product, Invoice } from '../interfaces/product';
import { LocalStorageKey } from '../constants/LocalStorageKey';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public orders$ = new Subject<number>();
  public changePrice$ = new Subject<number>();

  constructor() {}

  public addProductToLocalstorage(product: Product, amount: number): void {
    const waybill: Invoice = { product: product, numberOfproducts: amount };

    let arrayProducts = [waybill];

    const dataFromLocalStorage = this.getDataFromLocalStorage();

    if (dataFromLocalStorage.length) {
      arrayProducts = dataFromLocalStorage;
      arrayProducts.push(waybill);
    }

    this.sendToLocalStorage(arrayProducts);
    this.orders$.next(arrayProducts.length);
  }

  public chengeItemFromLocalStorage(invoice: Invoice): void {
    let price = 0;

    const dataFromLocalStorage = this.getDataFromLocalStorage();

    const newArrayProducts = dataFromLocalStorage.map((item) =>
      item.product.id === invoice.product.id ? invoice : item
    );

    localStorage.removeItem(LocalStorageKey.KEY);

    this.sendToLocalStorage(newArrayProducts);

    newArrayProducts.forEach(
      (item) => (price += item.numberOfproducts * item.product.price)
    );

    this.changePrice$.next(price);
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

  public checkProductInBasket(product: Product): boolean {
    const arrayProducts: Invoice[] = this.getDataFromLocalStorage();

    return arrayProducts.some((item) => item.product.id === product.id);
  }

  private sendToLocalStorage(invoices: Invoice[]): void {
    const jsonProducts = JSON.stringify(invoices);
    localStorage.setItem(LocalStorageKey.KEY, jsonProducts);
  }
}
