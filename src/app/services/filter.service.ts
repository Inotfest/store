import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OptionsObjectFilter, valueProduct } from '../interfaces/filter';
import { FilterType } from '../constants/Catalog';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public productsFilter$ = new Subject<OptionsObjectFilter[]>();

  private arrayOfRequestParameters: OptionsObjectFilter[] = [];

  constructor() {}

  public filterItems(event: Event, value: valueProduct, type: string): void {
    const eventInput = <HTMLInputElement>event.target;

    const categoryValue =
      typeof value === 'object'
        ? FilterType.CATEGORY_RANGE
        : FilterType.CATEGORY;

    const optionsObject: OptionsObjectFilter = {
      type,
      value: value,
      category: categoryValue,
    };

    if (eventInput.checked) {
      this.arrayOfRequestParameters.push(optionsObject);
    } else {
      const index = this.arrayOfRequestParameters.indexOf(optionsObject);
      this.arrayOfRequestParameters.splice(index, 1);
    }

    this.sendingUrlParameters();
  }

  public searchFullText(searchText: string) {
    const optionsObject: OptionsObjectFilter = {
      type: FilterType.SEARCH,
      value: searchText,
      category: FilterType.SEARCH,
    };

    this.clearingDuplicateParameters(FilterType.SEARCH);

    this.arrayOfRequestParameters.push(optionsObject);
    this.sendingUrlParameters();
  }

  public filterPrice(fromPrice: number, toPrice: number) {
    const optionsObject: OptionsObjectFilter = {
      type: FilterType.PRICE,
      value: { minValue: fromPrice, maxValue: toPrice },
      category: FilterType.CATEGORY_RANGE,
    };

    this.clearingDuplicateParameters(FilterType.PRICE);

    this.arrayOfRequestParameters.push(optionsObject);
    this.sendingUrlParameters();
  }

  private clearingDuplicateParameters(type: string) {
    this.arrayOfRequestParameters = this.arrayOfRequestParameters.filter(
      (item) => item.type !== type
    );
  }

  private sendingUrlParameters() {
    this.productsFilter$.next(this.arrayOfRequestParameters);
  }
}
