import { Component, Input, OnInit } from '@angular/core';
import { SelectObject } from 'src/app/interfaces/filter';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() category: SelectObject;

  public checked: boolean = false;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.activeСheck();
  }

  public onChacngePoints(): void {
    this.checked = !this.checked;

    this.filterService.filterItems(
      this.checked,
      this.category.value,
      this.category.type
    );
  }

  private activeСheck(): void {
    this.checked = this.filterService.requestParametersObject.filterArray.some(
      (item) => item.value === this.category.value
    );
  }
}
