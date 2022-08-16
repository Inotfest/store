import { Component } from '@angular/core';
import { Catalog } from 'src/app/constants/Catalog';
import { SelectObject } from 'src/app/interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public brandList: SelectObject[] = Catalog.brand;
  public colorList: SelectObject[] = Catalog.color;
  public diagonalList: SelectObject[] = Catalog.diagonal;
  public ramList: SelectObject[] = Catalog.ram;
  public batteryList: SelectObject[] = Catalog.battery;
  public memoryList: SelectObject[] = Catalog.memory;

  constructor() {}
}
