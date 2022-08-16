import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OptionsObjectFilter, valueProduct } from '../interfaces/filter';
import { FilterType } from '../constants/Catalog';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public productsFilter$ = new Subject<OptionsObjectFilter[]>();

  public arrayOfRequestParameters: OptionsObjectFilter[] = [];

  constructor() {}

  public filterItems(
    checked: boolean,
    value: valueProduct,
    type: string
  ): void {
    const categoryValue =
      typeof value === 'object'
        ? FilterType.CATEGORY_RANGE
        : FilterType.CATEGORY;

    const optionsObject: OptionsObjectFilter = {
      type,
      value: value,
      category: categoryValue,
    };

    if (checked) {
      this.arrayOfRequestParameters.push(optionsObject);
    } else {
      this.arrayOfRequestParameters = this.arrayOfRequestParameters.filter(
        (item) => item.value !== value
      );
    }

    this.sendingUrlParameters();
  }

  public searchFullText(searchText: string): void {
    const optionsObject: OptionsObjectFilter = {
      type: FilterType.SEARCH,
      value: searchText,
      category: FilterType.SEARCH,
    };

    this.clearingDuplicateParameters(FilterType.SEARCH);

    this.arrayOfRequestParameters.push(optionsObject);
    this.sendingUrlParameters();
  }

  public filterPrice(fromPrice: number, toPrice: number): void {
    const optionsObject: OptionsObjectFilter = {
      type: FilterType.PRICE,
      value: { minValue: fromPrice, maxValue: toPrice },
      category: FilterType.CATEGORY_RANGE,
    };

    this.clearingDuplicateParameters(FilterType.PRICE);

    this.arrayOfRequestParameters.push(optionsObject);
    this.sendingUrlParameters();
  }

  private clearingDuplicateParameters(type: string): void {
    this.arrayOfRequestParameters = this.arrayOfRequestParameters.filter(
      (item) => item.type !== type
    );
  }

  private sendingUrlParameters(): void {
    this.productsFilter$.next(this.arrayOfRequestParameters);
  }
}
