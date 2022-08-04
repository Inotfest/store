import { Component, Input, OnInit } from '@angular/core';
import { SelectObject, valueProduct } from 'src/app/interfaces/filter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-categoty',
  templateUrl: './categoty.component.html',
  styleUrls: ['./categoty.component.scss'],
})
export class CategotyComponent implements OnInit {
  @Input() categoryList!: SelectObject[];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  onChacngePoints(event: Event, value: valueProduct, type: string) {
    this.filterService.filterItems(event, value, type);
  }
}
