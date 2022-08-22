import { Component, Input, OnInit } from '@angular/core';
import { SelectObject, valueProduct } from 'src/app/interfaces/filter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class СategoryComponent implements OnInit {
  @Input() categoryList: SelectObject[];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.checkMark();
  }

  checkMark() {
    this.filterService.requestParametersObject.filterArray.forEach(
      (product) => {
        this.categoryList = this.categoryList.map((item) => {
          if (item.value === product.value) {
            item.checked = true;
          }
          return item;
        });
      }
    );
  }

  public onChacngePoints(
    checked: boolean,
    value: valueProduct,
    type: string
  ): void {
    this.filterService.filterItems(checked, value, type);
  }
}
