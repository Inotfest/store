import { Injectable } from '@angular/core';
import { Product, Waybill } from '../interfaces/product';
import { LocalStorageKey } from '../constants/LocalStorageKey';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public addProductToLocalstorage(product: Product, amount: number) {
    const waybill: Waybill = { product: product, numberOfproducts: amount };

    const dataFromLocalStorage = localStorage.getItem(LocalStorageKey.KEY);

    if (dataFromLocalStorage) {
      const arrayProducts = JSON.parse(dataFromLocalStorage);
      arrayProducts.push(waybill);
      sendToLocalStorage(arrayProducts);
    } else {
      const arrayProducts: Waybill[] = [waybill];
      sendToLocalStorage(arrayProducts);
    }

    function sendToLocalStorage(value: Waybill[]) {
      const jsonProducts = JSON.stringify(value);
      localStorage.setItem(LocalStorageKey.KEY, jsonProducts);
    }
  }

  public checkLocalStorage() {
    return !!localStorage.getItem(LocalStorageKey.KEY);
  }
}
