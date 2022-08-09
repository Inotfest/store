import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/constants/Catalog';
import { SelectObject } from 'src/app/interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  brandList: SelectObject[] = Catalog.brand;
  colorList: SelectObject[] = Catalog.color;
  diagonalList: SelectObject[] = Catalog.diagonal;
  ramList: SelectObject[] = Catalog.ram;
  batteryList: SelectObject[] = Catalog.battery;
  memoryList: SelectObject[] = Catalog.memory;

  constructor() {}

  ngOnInit(): void {}
}
