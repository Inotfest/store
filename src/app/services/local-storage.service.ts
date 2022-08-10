import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { LocalStorageKey } from '../constants/LocalStorageKey';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public addProductToLocalstorage(product: Product) {
    const key = LocalStorageKey.KEY;

    const dataFromLocalStorage = localStorage.getItem(key);

    if (dataFromLocalStorage) {
      const arrayProducts = JSON.parse(dataFromLocalStorage);
      arrayProducts.push(product);
      sendToLocalStorage(key, arrayProducts);
    } else {
      const arrayProducts = [product];
      sendToLocalStorage(key, arrayProducts);
    }

    function sendToLocalStorage(key: string, value: Product[]) {
      const jsonProducts = JSON.stringify(value);
      localStorage.setItem(key, jsonProducts);
    }
  }
}
