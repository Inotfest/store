import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  productsFilter$ = new BehaviorSubject<string>(environment.jsonUrl);

  brandFilteringArray: string[] = [];
  colorFilteringArray: string[] = [];
  diagonalFilteringArray: string[] = [];
  ramFilteringArray: string[] = [];

  constructor() {}

  eventSearch(inputData: string) {
    this.productsFilter$.next(`${environment.jsonSearch}${inputData}`);
  }

  filterBrand(event: Event) {
    this.sortingValues(event, this.brandFilteringArray);
  }

  filterColor(event: Event) {
    this.sortingValues(event, this.colorFilteringArray);
  }

  filterDialog(event: Event) {
    this.sortingValues(event, this.diagonalFilteringArray);
  }

  filterRam(event: Event) {
    this.sortingValues(event, this.ramFilteringArray);
  }

  sortingValues(event: Event, arrayOfElements: string[]) {
    const eventInput = <HTMLInputElement>event.target;
    if (eventInput.checked) {
      arrayOfElements.push(eventInput.value);
    } else {
      const index = arrayOfElements.indexOf(eventInput.value);
      arrayOfElements.splice(index, 1);
    }
    this.requestUrlGeneration();
  }

  requestUrlGeneration() {
    const brand: string = arrayToString('brand', this.brandFilteringArray);
    const color: string = arrayToString('color', this.colorFilteringArray);
    const diagonal: string = rangeСonnections(
      'diagonal',
      this.diagonalFilteringArray
    );
    const ram: string = arrayToString('ram', this.ramFilteringArray);

    const resultSring = brand + color + diagonal + ram;
    const queryString = `${environment.jsonUrl}?${resultSring}`;

    this.productsFilter$.next(queryString);

    function arrayToString(key: string, arrayOfValues: string[]) {
      if (!arrayOfValues.length) {
        return '';
      }
      return arrayOfValues.map((item) => `&${key}=${item}`).join('');
    }

    function rangeСonnections(key: string, rangeArray: string[]) {
      if (!rangeArray.length) {
        return '';
      }

      return rangeArray
        .map((item) =>
          item
            .split(' ')
            .join('')
            .split('-')
            .reduce((a, b) => `&${key}_gte=${a}&${key}_lte=${b}`)
        )
        .join('');
    }
  }
}
