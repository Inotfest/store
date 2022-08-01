import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

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

  constructor(private filter: FilterService) {}

  ngOnInit(): void {}

  onChangeBrand(event: Event) {
    this.filter.filterBrand(event);
  }

  onChangeColor(event: Event) {
    this.filter.filterColor(event);
  }

  onChangeDiagonal(event: Event) {
    this.filter.filterDialog(event);
  }
}
