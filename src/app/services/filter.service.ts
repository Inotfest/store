import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OptionsObjectFilter, valueProduct } from '../interfaces/filter';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  productsFilter$ = new Subject<OptionsObjectFilter[]>();
  arrayOfRequestParameters: OptionsObjectFilter[] = [];

  constructor() {}

  filterItems(event: Event, value: valueProduct, type: string): void {
    const eventInput = <HTMLInputElement>event.target;
    const optionsObject: OptionsObjectFilter = {
      type,
      value: value,
    };

    if (eventInput.checked) {
      this.arrayOfRequestParameters.push(optionsObject);
    } else {
      const index = this.arrayOfRequestParameters.indexOf(optionsObject);
      this.arrayOfRequestParameters.splice(index, 1);
    }

    this.sendingUrlParameters();
  }

  searchFullText(searchText: string) {
    const optionsObject: OptionsObjectFilter = {
      type: '',
      value: searchText,
    };

    if (searchText) {
      this.arrayOfRequestParameters.push(optionsObject);
    } else {
      const index = this.arrayOfRequestParameters.indexOf(optionsObject);
      this.arrayOfRequestParameters.splice(index, 1);
    }

    this.sendingUrlParameters();
  }

  sendingUrlParameters() {
    this.productsFilter$.next(this.arrayOfRequestParameters);
  }
}
