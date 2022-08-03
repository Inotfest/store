import { Component, OnInit } from '@angular/core';
import { catalog } from 'src/app/constants/catalog';
import { SelectObject } from 'src/app/interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  brandList: SelectObject[] = catalog.brand;
  colorList: SelectObject[] = catalog.color;
  diagonalList: SelectObject[] = catalog.diagonal;
  ramList: SelectObject[] = catalog.ram;

  constructor() {}

  ngOnInit(): void {}
}
