import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  ObjFilterParams,
  OptionsObjectFilter,
  valueProduct,
} from '../interfaces/filter';
import { FilterType } from '../constants/Catalog';
import { PageSize } from '../constants/PageSize';
import { InputPrice } from '../constants/Price';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public pageIndex = 0;
  public pageSize = PageSize.SIZE;
  public pageSizeOptions = [8, 12, 24];
  public numberOfItems = 100;

  public requestParametersObject: ObjFilterParams = {
    page: 1,
    pageSize: PageSize.SIZE,
    filterArray: [],
  };

  public fromPrice = InputPrice.MIN_PRICE;
  public toPrice = InputPrice.MAX_RPICE;

  public productsFilter$ = new BehaviorSubject<ObjFilterParams>(
    this.requestParametersObject
  );

  public totalCount$ = new Subject<number>();
  public initialPage$ = new Subject<number>();

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
      this.requestParametersObject.filterArray.push(optionsObject);
    } else {
      this.requestParametersObject.filterArray =
        this.requestParametersObject.filterArray.filter(
          (item) => item.value !== value
        );
    }

    this.sendingUrlParameters();
    this.initialPage$.next(0);
  }

  public searchFullText(searchText: string): void {
    const optionsObject: OptionsObjectFilter = {
      type: FilterType.SEARCH,
      value: searchText,
      category: FilterType.SEARCH,
    };

    this.clearingDuplicateParameters(FilterType.SEARCH);

    this.requestParametersObject.filterArray.push(optionsObject);
    this.sendingUrlParameters();
    this.initialPage$.next(0);
  }

  public filterPrice(fromPrice: number, toPrice: number): void {
    const optionsObject: OptionsObjectFilter = {
      type: FilterType.PRICE,
      value: { minValue: fromPrice, maxValue: toPrice },
      category: FilterType.CATEGORY_RANGE,
    };

    this.clearingDuplicateParameters(FilterType.PRICE);

    this.requestParametersObject.filterArray.push(optionsObject);
    this.sendingUrlParameters();

    this.fromPrice = fromPrice;
    this.toPrice = toPrice;
    this.initialPage$.next(0);
  }

  public sendingUrlParameters(): void {
    this.productsFilter$.next(this.requestParametersObject);
  }

  public pageChange(page: number, pageSize: number, length: number) {
    this.pageIndex = page;
    this.pageSize = pageSize;
    this.numberOfItems = length;

    this.requestParametersObject.page = page + 1;
    this.requestParametersObject.pageSize = pageSize;

    this.sendingUrlParameters();
  }

  private clearingDuplicateParameters(type: string): void {
    this.requestParametersObject.filterArray =
      this.requestParametersObject.filterArray.filter(
        (item) => item.type !== type
      );
  }
}
