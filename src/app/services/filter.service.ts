import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OptionsObjectFilter, valueProduct } from '../interfaces/filter';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  productsFilter$ = new Subject<any>();
  arrayOfRequestParameters: any[] = [];

  constructor() {}

  eventSearch(inputData: string): void {
    this.productsFilter$.next(`${environment.jsonSearch}${inputData}`);
  }

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
