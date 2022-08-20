import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ObjFilterParams,
  OptionsObjectFilter,
  valueProduct,
} from '../interfaces/filter';
import { FilterType } from '../constants/Catalog';
import { InputPrice } from '../constants/Price';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public productsFilter$ = new Subject<ObjFilterParams>();

  public objParams: ObjFilterParams = {
    page: 1,
    pageSize: 10,
    filterArray: [],
  };

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
      this.objParams.filterArray.push(optionsObject);
    } else {
      this.objParams.filterArray = this.objParams.filterArray.filter(
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

    this.objParams.filterArray.push(optionsObject);
    this.sendingUrlParameters();
  }

  public filterPrice(fromPrice: number, toPrice: number): void {
    const optionsObject: OptionsObjectFilter = {
      type: FilterType.PRICE,
      value: { minValue: fromPrice, maxValue: toPrice },
      category: FilterType.CATEGORY_RANGE,
    };

    this.clearingDuplicateParameters(FilterType.PRICE);

    this.objParams.filterArray.push(optionsObject);
    this.sendingUrlParameters();
  }

  public sendingUrlParameters(): void {
    this.productsFilter$.next(this.objParams);
  }

  private clearingDuplicateParameters(type: string): void {
    this.objParams.filterArray = this.objParams.filterArray.filter(
      (item) => item.type !== type
    );
  }
}
