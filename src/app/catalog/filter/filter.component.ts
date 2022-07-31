import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  brandList: string[] = ['nokia', 'apple', 'samsung', 'xiaomi', 'motorola'];
  colorList: string[] = [
    'blue',
    'white',
    'gray',
    'chocoal',
    'graphite',
    'black',
  ];
  diagonalList = ['4.1 - 4.5', '4.6 - 5', '5.1 - 5.5', '5.55 - 6', '6 - 10'];

  brandFilteringArray: string[] = [];
  colorFilteringArray: string[] = [];
  diagonalFilteringArray: string[] = [];

  constructor(private event: EventService) {}

  ngOnInit(): void {}

  onChangeBrand(event: Event) {
    this.sortingValues(event, this.brandFilteringArray);
  }

  onChangeColor(event: Event) {
    this.sortingValues(event, this.colorFilteringArray);
  }

  onChangeDiagonal(event: Event) {
    this.sortingValues(event, this.diagonalFilteringArray);
  }

  sortingValues(event: Event, arrayOfElements: string[]) {
    const eventInput = <HTMLInputElement>event.target;
    if (eventInput.checked) {
      arrayOfElements.push(eventInput.value);
    } else {
      const index = arrayOfElements.indexOf(eventInput.value);
      arrayOfElements.splice(index, 1);
    }
    this.onSubmit();
  }

  onSubmit() {
    const brand: string = arrayToString('brand', this.brandFilteringArray);
    const color: string = arrayToString('color', this.colorFilteringArray);
    const diagonal: string = rangeСonnections(
      'diagonal',
      this.diagonalFilteringArray
    );

    const resultSring = brand + color + diagonal;
    const queryString = `${environment.jsonUrl}?${resultSring}`;
    console.log(queryString);

    this.event.eventProduct$.next(queryString);

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
